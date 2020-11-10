let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.status(200);
  res.json({'status': '200', 'success': true });
});

module.exports = router;