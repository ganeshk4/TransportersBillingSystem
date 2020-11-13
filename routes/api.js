let express = require('express');
let router = express.Router();
let profileApi = require('./profile');
let gstHeadApi = require('./gsthead');
let invoiceCodeApi = require('./invoicecode');

router.use('/profile',profileApi);
router.use('/gsthead',gstHeadApi);
router.use('/invoicecode',invoiceCodeApi);

module.exports = router;