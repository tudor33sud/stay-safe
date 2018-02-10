const environment = process.env.NODE_ENV || 'localhost';
module.exports = {
    port: process.env.PORT || 3005,
    tracingHeaderKey: process.env.TRACING_HEADER_KEY || 'x-ss-request-id',
    jwtHeaderKey: process.env.JWT_HEADER_KEY || 'x-ss-jwt',
    KC_CLIENT_ID: process.env.KC_CLIENT_ID,
    KC_SERVER_URL: process.env.KC_SERVER_URL,
    KC_REALM: process.env.KC_REALM,
    SERVICE_NAME: 'api-gateway'
};