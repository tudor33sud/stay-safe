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


router.get('/', [security.guards.authenticated], reqUtils.defaultProxyHandler(dataServiceRequest));

router.post('/', [security.guards.authenticated], reqUtils.defaultProxyHandler(dataServiceRequest));

router.delete('/:eventId', [security.guards.authenticated], reqUtils.defaultProxyHandler(dataServiceRequest));
router.post('/:eventId/attachments', [security.guards.authenticated], reqUtils.defaultProxyHandler(dataServiceRequest))
router.get('/:eventId/attachments/:attachmentId', [security.guards.authenticated], reqUtils.defaultProxyHandler(dataServiceRequest))
module.exports = router;