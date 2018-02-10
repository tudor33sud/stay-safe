const userRoles = {
    ADMIN: 'admin',
    AMBULANCE: 'ambulance'
};

function isAdmin(token, req, res) {
    return token.hasRole(userRoles.ADMIN);
}

function isAmbulance(token, res, res) {
    return token.hasRole(userRoles.AMBULANCE)
}

module.exports = {
    isAdmin,
    isAmbulance
};

