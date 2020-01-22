"use strict";

const axios = require("axios");
const variables = require("../variables");




exports.CustomerDetails = async function (queryParams) {
    const requestURL = variables.customerAdapter + '/customer';
    const customerDetails = await axios.post(requestURL, queryParams);
    return customerDetails.data.data;
}

exports.getCustomerDetails = async function (queryParams) {
    const requestURL = variables.customerAdapter + '/customer';
    const customerDetails = await axios.get(requestURL,   queryParams );
    return customerDetails.data.data;
}

exports.getCustomerDetailsId = async function (userDetailsId) {
    const requestURL = variables.customerAdapter + '/customer/'+userDetailsId;
    const customerDetails = await axios.get(requestURL);
    return customerDetails.data.data;
}


exports.updateCustomerDetails = async function (userDetailsId,userData) {
    console.log(userDetailsId)
    const requestURL = variables.customerAdapter + '/customer/'+ userDetailsId;
    
    const customerDetails = await axios.put(requestURL,userData);
    return customerDetails.data.data;
}

exports.deleteCustomerDetails = async function (userDetailsId) {
    const requestURL = variables.customerAdapter + '/customer/'+userDetailsId;
    const customerDetails = await axios.delete(requestURL);
    return customerDetails.data.data;
}