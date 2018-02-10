const express = require('express');
const router = express.Router();

const security = require('../security');

router.get('/', [security.guards.authenticated], async (req, res, next) => {
    res.json({ message: 'OK' });
});

module.exports = router;