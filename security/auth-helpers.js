/**
 * Function which extracts keycloak user profile from request token ( userId, email, name)
 * @param  {} req
 */
function getKeycloakProfile(req) {
    const tokenContent = req.kauth.grant.access_token.content;
    const { email, name, sub } = tokenContent;
    return {
        userId: sub,
        email: email,
        name: name
    };
}

module.exports = {
    getUserProfile: getKeycloakProfile
};