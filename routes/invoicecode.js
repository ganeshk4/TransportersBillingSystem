let express = require('express');
let router = express.Router();
let invoiceCodeController = require('../controllers/invoicecode'); 

router.get('/', (req, res) => {
  invoiceCodeController.get(req, res);
});

router.post('/', (req, res) => {
  invoiceCodeController.post(req, res);
});

module.exports = router;