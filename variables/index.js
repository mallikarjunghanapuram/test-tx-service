"use strict";

const customerAdapter = process.env.CUSTOMER_ADAPTER_URL;
const env = process.env.NODE_ENV || "development";
const host = process.env.APP_HOST || "localhost";
const port = process.env.APP_PORT || 1010;
const name = process.env.APP_NAME || "pm-customer-service";
const logLevel = process.env.LOG_LEVEL;



const variables = {
    customerAdapter,
    env,
    host,
    port,
    name,
    logLevel
};

module.exports = variables;

