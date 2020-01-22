"use strict";

const errorResponseHandler = require('../utilities/pc-helpers/errorResponseHandler');
const customerModel = require("../models/customer");



exports.createCustomerDetails = async function (ctx) {
    //const { userDetailsId, userId, amount, address } = ctx.request.body
    try {
        const { userDetailsId, userId, amount, address } = ctx.request.body
        const userDetails = await customerModel.CustomerDetails(ctx.request.body);
        ctx.body = userDetails;
      
      ctx.response.ok(userDetails, "successfully created record");
    } catch (error) {
      ctx.response.badRequest(null, error.message);
    }
};



exports.getCustomerDetails = async function (ctx) {
    try {
        const queryParams = ctx.request.query;
        const userDetails = await customerModel.getCustomerDetails(queryParams);
        ctx.response.ok(userDetails, "Successfully fetched the responses");
    } catch (error) {
        errorResponseHandler(ctx, error);
    }
};

exports.getCustomerDetailsId = async function (ctx) {
    try {
        const userDetailsId = ctx.params.id;
        console.log(userDetailsId)

        const userDetails = await customerModel.getCustomerDetailsId(userDetailsId);
        ctx.body = userDetails;
        ctx.response.ok(userDetails, "Successfully fetched the responses");
    } catch (error) {
        errorResponseHandler(ctx, error);
    }
};

exports.updateCustomerDetails = async function (ctx) {
    try {
        const userDetailsId = ctx.params.id;
        const userId = ctx.request.body;
        console.log(userDetailsId)

        const userDetails = await customerModel.updateCustomerDetails(userDetailsId,userId );
        ctx.response.ok(userDetails, "Successfully fetched the responses");
    } catch (error) {
        errorResponseHandler(ctx, error);
    }
};

exports.deleteCustomerDetails = async function (ctx) {
    try {
        const userDetailsId = ctx.params.id;
        const userDetails = await customerModel.deleteCustomerDetails(userDetailsId);
        ctx.response.ok(userDetails, "Successfully fetched the responses");
    } catch (error) {
        errorResponseHandler(ctx, error);
    }
};
