let db = require('../models');
let model = db.invoicecode;

let invoiceCodeController = () => {

  async function getAllRecords() {
    return await model.findAll();
  }

  const get = async function (req, res) {
    const records = await getAllRecords();
    res.status(200);
    res.json(records);
  }

  const post = function (req, res) {
    let body = req.body;
    return model
      .create({
        invoicecode: body.code
      })
      .then(async () => {
        const records = await getAllRecords();
        res.status(200);
        res.json(records);
      });
  }
  return { get, post };
}

module.exports = invoiceCodeController();