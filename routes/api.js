let express = require('express');
let router = express.Router();
let profileApi = require('./profile');
let gstHeadApi = require('./gsthead');
let invoiceCodeApi = require('./invoicecode');
let partyApi = require('./party');

router.use('/profile',profileApi);
router.use('/gsthead',gstHeadApi);
router.use('/invoicecode',invoiceCodeApi);
router.use('/party',partyApi);

module.exports = router;