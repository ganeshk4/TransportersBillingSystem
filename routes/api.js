let express = require('express');
let router = express.Router();
let profileApi = require('./profile')

router.use('/profile',profileApi);

module.exports = router;