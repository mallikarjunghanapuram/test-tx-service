"use strict";

const Router = require("koa-router");

const router = new Router();
const healthController = require("./controllers/health");
const customerController = require("./controllers/customer");

router.get("/health", healthController.health);

router.post("/customer", customerController.createCustomerDetails);
router.get("/customer", customerController.getCustomerDetails);
router.get("/customer/:id", customerController.getCustomerDetailsId);
router.put("/customer/:id", customerController.updateCustomerDetails);
router.delete("/customer/:id", customerController.deleteCustomerDetails);



module.exports = router;