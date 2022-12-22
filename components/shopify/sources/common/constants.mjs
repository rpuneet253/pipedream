const DOMAIN_SUFFIX = ".myshopify.com";
const WEBHOOK_ID = "webhookId";

const HEADER = {
  SHOP_DOMAIN: "x-shopify-shop-domain",
  TOPIC: "x-shopify-topic",
};

const EVENT_TOPIC = {
  APP_UNINSTALLED: "app/uninstalled",
  BULK_OPERATIONS_FINISH: "bulk_operations/finish",
  CARTS_CREATE: "carts/create",
  CARTS_UPDATE: "carts/update",
  CHECKOUTS_CREATE: "checkouts/create",
  CHECKOUTS_DELETE: "checkouts/delete",
  CHECKOUTS_UPDATE: "checkouts/update",
  COLLECTION_LISTINGS_ADD: "collection_listings/add",
  COLLECTION_LISTINGS_REMOVE: "collection_listings/remove",
  COLLECTION_LISTINGS_UPDATE: "collection_listings/update",
  COLLECTIONS_CREATE: "collections/create",
  COLLECTIONS_DELETE: "collections/delete",
  COLLECTIONS_UPDATE: "collections/update",
  CUSTOMER_GROUPS_CREATE: "customer_groups/create",
  CUSTOMER_GROUPS_DELETE: "customer_groups/delete",
  CUSTOMER_GROUPS_UPDATE: "customer_groups/update",
  CUSTOMER_PAYMENT_METHODS_CREATE: "customer_payment_methods/create",
  CUSTOMER_PAYMENT_METHODS_REVOKE: "customer_payment_methods/revoke",
  CUSTOMER_PAYMENT_METHODS_UPDATE: "customer_payment_methods/update",
  CUSTOMERS_MARKETING_CONSENT_UPDATE: "customers_marketing_consent/update",
  CUSTOMERS_CREATE: "customers/create",
  CUSTOMERS_DELETE: "customers/delete",
  CUSTOMERS_DISABLE: "customers/disable",
  CUSTOMERS_ENABLE: "customers/enable",
  CUSTOMERS_UPDATE: "customers/update",
  DISPUTES_CREATE: "disputes/create",
  DISPUTES_UPDATE: "disputes/update",
  DOMAINS_CREATE: "domains/create",
  DOMAINS_DESTROY: "domains/destroy",
  DOMAINS_UPDATE: "domains/update",
  DRAFT_ORDERS_CREATE: "draft_orders/create",
  DRAFT_ORDERS_DELETE: "draft_orders/delete",
  DRAFT_ORDERS_UPDATE: "draft_orders/update",
  FULFILLMENT_EVENTS_CREATE: "fulfillment_events/create",
  FULFILLMENT_EVENTS_DELETE: "fulfillment_events/delete",
  FULFILLMENTS_CREATE: "fulfillments/create",
  FULFILLMENTS_UPDATE: "fulfillments/update",
  INVENTORY_ITEMS_CREATE: "inventory_items/create",
  INVENTORY_ITEMS_DELETE: "inventory_items/delete",
  INVENTORY_ITEMS_UPDATE: "inventory_items/update",
  INVENTORY_LEVELS_CONNECT: "inventory_levels/connect",
  INVENTORY_LEVELS_DISCONNECT: "inventory_levels/disconnect",
  INVENTORY_LEVELS_UPDATE: "inventory_levels/update",
  LOCALES_CREATE: "locales/create",
  LOCALES_UPDATE: "locales/update",
  LOCATIONS_CREATE: "locations/create",
  LOCATIONS_DELETE: "locations/delete",
  LOCATIONS_UPDATE: "locations/update",
  MARKETS_CREATE: "markets/create",
  MARKETS_DELETE: "markets/delete",
  MARKETS_UPDATE: "markets/update",
  ORDER_TRANSACTIONS_CREATE: "order_transactions/create",
  ORDERS_CANCELLED: "orders/cancelled",
  ORDERS_CREATE: "orders/create",
  ORDERS_DELETE: "orders/delete",
  ORDERS_EDITED: "orders/edited",
  ORDERS_FULFILLED: "orders/fulfilled",
  ORDERS_PAID: "orders/paid",
  ORDERS_PARTIALLY_FULFILLED: "orders/partially_fulfilled",
  ORDERS_UPDATED: "orders/updated",
  PRODUCT_LISTINGS_ADD: "product_listings/add",
  PRODUCT_LISTINGS_REMOVE: "product_listings/remove",
  PRODUCT_LISTINGS_UPDATE: "product_listings/update",
  PRODUCTS_CREATE: "products/create",
  PRODUCTS_DELETE: "products/delete",
  PRODUCTS_UPDATE: "products/update",
  PROFILES_CREATE: "profiles/create",
  PROFILES_DELETE: "profiles/delete",
  PROFILES_UPDATE: "profiles/update",
  REFUNDS_CREATE: "refunds/create",
  SCHEDULED_PRODUCT_LISTINGS_ADD: "scheduled_product_listings/add",
  SCHEDULED_PRODUCT_LISTINGS_REMOVE: "scheduled_product_listings/remove",
  SCHEDULED_PRODUCT_LISTINGS_UPDATE: "scheduled_product_listings/update",
  SELLING_PLAN_GROUPS_CREATE: "selling_plan_groups/create",
  SELLING_PLAN_GROUPS_DELETE: "selling_plan_groups/delete",
  SELLING_PLAN_GROUPS_UPDATE: "selling_plan_groups/update",
  SHOP_UPDATE: "shop/update",
  SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED: "subscription_billing_attempts/challenged",
  SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE: "subscription_billing_attempts/failure",
  SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS: "subscription_billing_attempts/success",
  SUBSCRIPTION_CONTRACTS_CREATE: "subscription_contracts/create",
  SUBSCRIPTION_CONTRACTS_UPDATE: "subscription_contracts/update",
  TENDER_TRANSACTIONS_CREATE: "tender_transactions/create",
  THEMES_CREATE: "themes/create",
  THEMES_DELETE: "themes/delete",
  THEMES_PUBLISH: "themes/publish",
  EVENT_TOPICS_THEMES_UPDATE: "event-topics-themes-update",
  THEMES_UPDATE: "themes/update",
};

const EVENT_TOPICS = Object.values(EVENT_TOPIC);

export default {
  DOMAIN_SUFFIX,
  WEBHOOK_ID,
  HEADER,
  EVENT_TOPIC,
  EVENT_TOPICS,
};