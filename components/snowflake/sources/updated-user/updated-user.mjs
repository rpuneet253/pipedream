import common from "../common-update.mjs";

export default {
  ...common,
  type: "source",
  key: "snowflake-updated-user",
  name: "New Update User",
  description: "Emit new event when a user is updated",
  version: "0.0.1",
  methods: {
    ...common.methods,
    lookUpKey() {
      return "name";
    },
    getSqlText() {
      return "show users";
    },
  },
};