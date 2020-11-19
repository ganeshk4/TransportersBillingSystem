let express = require('express');
let router = express.Router();
let profileController = require('../controllers/profile'); 

router.get('/', (req, res) => {
  profileController.get(req, res);
});

router.post('/', (req, res) => {
  profileController.post(req, res);
});

module.exports = router;