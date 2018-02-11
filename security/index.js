const appConfig = require('../config');
const Keycloak = require('keycloak-connect');
const ApiError = require('../error/api-error');
const roleCheck = require('./role-check');
const helpers = require('./auth-helpers');

const kcConfig = {
    clientId: appConfig.kcClientId,
    bearerOnly: true,
    serverUrl: appConfig.kcServerUrl,
    realm: appConfig.kcRealm,
    sslRequired: 'external',
    'confidential-port': 0
};
const keycloak = new Keycloak({ scope: 'openId' }, kcConfig);

/**
 * Configure access denied behaviour
 */
keycloak.accessDenied = (req, res, next) => {
    res.status(403).json({ message: 'Access Denied' });
};

/**
 *  Security middleware to provide general security interaction, without causing to interfere with URLS until specified by a guard that it should check auth.
 *  Options:
 *
 *  - `logout` URL for logging a user out. Defaults to `/logout`.
 *  - `admin` Root URL for Keycloak admin callbacks.  Defaults to `/`.
 *
 * @param {Object} options Optional options for specifying details.
 * @param {*} options 
 */
function getMiddleware(options = {}) {
    const opts = Object.assign({
        logout: '/logout',
        admin: '/'
    }, options);
    return keycloak.middleware(opts);
}


const guards = {
    authenticated: keycloak.protect(),
    admin: keycloak.protect(roleCheck.isAdmin),
    ambulance: keycloak.protect(roleCheck.isAmbulance)
};

const security = {
    helpers,
    guards,
    middleware: getMiddleware
};

module.exports = security;