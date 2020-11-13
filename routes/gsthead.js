let express = require('express');
let router = express.Router();
let gstHeadController = require('../controllers/gsthead'); 

router.get('/', (req, res) => {
  gstHeadController.get(req, res);
});

router.post('/', (req, res) => {
  gstHeadController.post(req, res);
});

module.exports = router;