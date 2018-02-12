const express = require('express');
const router = express.Router();

const appConfig = require('../config');
const security = require('../security');
const reqUtils = require('../utils/requests');
const rp = require('request-promise');

const dataServiceRequest = rp.defaults({
    baseUrl: appConfig.dataServiceUrl,
    json: true,
    resolveWithFullResponse: true
});

router.get('/', [security.guards.authenticated], reqUtils.defaultProxyHandler(dataServiceRequest));

router.post('/', [security.guards.authenticated], reqUtils.defaultProxyHandler(dataServiceRequest));

module.exports = router;