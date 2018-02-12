const environment = process.env.NODE_ENV || 'localhost';
module.exports = {
    port: process.env.PORT || 3005,
    tracingHeaderKey: process.env.TRACING_HEADER_KEY || 'x-ss-request-id',
    jwtHeaderKey: process.env.JWT_HEADER_KEY || 'x-ss-jwt',
    dataServiceUrl: process.env.DATA_SERVICE_URL || `http://localhost:3007`,
    kcClientId: process.env.KC_CLIENT_ID,
    kcServerUrl: process.env.KC_SERVER_URL,
    kcRealm: process.env.KC_REALM,
    serviceName: 'api-gateway'
};