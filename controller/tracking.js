const express = require('express');
const router = express.Router();

const appConfig = require('../config');
const security = require('../security');
const reqUtils = require('../utils/requests');
const request = require('request');

const dataServiceRequest = request.defaults({
    baseUrl: appConfig.dataServiceUrl,
    json: true
});

router.get('/events', [security.guards.ambulance], reqUtils.defaultProxyHandler(dataServiceRequest));
router.put('/events/:eventId/performer', [security.guards.ambulance], reqUtils.defaultProxyHandler(dataServiceRequest));

module.exports = router;