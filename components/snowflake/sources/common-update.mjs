import snowflake from "../snowflake.app.mjs";
import { DEFAULT_POLLING_SOURCE_TIMER_INTERVAL } from "@pipedream/platform";
import { v4 as uuid } from "uuid";

export default {
  dedupe: "unique",
  props: {
    snowflake,
    db: "$.service.db",
    timer: {
      description: "Watch for changes on this schedule",
      type: "$.interface.timer",
      default: {
        intervalSeconds: DEFAULT_POLLING_SOURCE_TIMER_INTERVAL,
      },
    },
  },
  methods: {
    async getDbValues() {
      return this.db.get("dbValues") ?? {};
    },
    async setDbValues(values) {
      return this.db.set("dbValues", values);
    },
    async fetchData() {
      return this.snowflake.getRows({
        sqlText: this.getSqlText(),
      });
    },
    async updateDbValues() {
      const db = await this.getDbValues();
      const rows = await this.fetchData();
      for await (const item of rows) {
        const key = item[this.lookUpKey()];
        db[key] = item;
      }
      await this.setDbValues(db);
    },
    async checkForDifferentData(db, rows) {
      for await (const item of rows) {
        const currentLookUpKey = item[this.lookUpKey()];
        const isNewItem = !db[currentLookUpKey];
        if (isNewItem) {
          this.emitNewEvent(item);
        } else {
          const changedKeys = this.getChangedKeys(db[currentLookUpKey], item);
          if (changedKeys.length > 0) {
            this.emitUpdatedEvent(item, db[currentLookUpKey], changedKeys);
          }
        }
      }
    },

    getChangedKeys(dbObject, queryObject) {
      const changedKeys = [];
      for (const key in dbObject) {
        if (queryObject[key] instanceof Date) {
          if (new Date(dbObject[key]).getTime() != queryObject[key].getTime()) {
            changedKeys.push(key);
          }
          continue;
        }
        if (dbObject[key] != queryObject[key]) {
          changedKeys.push(key);
        }
      }
      return changedKeys;
    },
    emit(isNew, newData, oldData, changedKeys) {
      const event = {
        newData,
        oldData,
        changedKeys,
      };

      const createOrUpdatedString = isNew
        ? "created"
        : "updated";
      this.$emit(event, {
        summary: `${newData[this.lookUpKey()]} was ${createOrUpdatedString}`,
        id: uuid(),
        ts: Date.now(),
      });
    },
    emitNewEvent(newData) {
      this.emit(true, newData);
    },
    emitUpdatedEvent(newData, oldData, changedKeys) {
      this.emit(false, newData, oldData, changedKeys);
    },
    lookUpKey() {
      throw new Error("lookUpKey must be implemented");
    },
    getSqlText() {
      throw new Error("getSqlText must be implemented");
    },
  },
  hooks: {
    async deploy() {
      await this.updateDbValues();
    },
  },
  async run() {
    const db = await this.getDbValues();
    const rows = await this.fetchData();
    await this.checkForDifferentData(db, rows);
    await this.updateDbValues();
  },
};