let express = require('express');
let router = express.Router();
let partyController = require('../controllers/party'); 

router.get('/', (req, res) => {
  partyController.get(req, res);
});

router.post('/', (req, res) => {
  partyController.post(req, res);
});

module.exports = router;