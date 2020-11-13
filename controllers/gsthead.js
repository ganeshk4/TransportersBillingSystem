let db = require('../models');
let model = db.gsthead;

let gstHeadController = () => {

  async function getAllRecords() {
    return await model.findAll();
  }

  const get = async function (req, res) {
    const records = await getAllRecords();
    res.status(200);
    res.json({data: records});
  }

  const post = async function (req, res) {
    let body = req.body;
    return model
      .create({
        gsthead: body.code
      })
      .catch(async (err) => {
        const records = await getAllRecords();
        res.status(500);
        res.json({error: err, data: records});
      })
      .then(async () => {
        const records = await getAllRecords();
        res.status(200);
        res.json({data: records});
      });
  }
  return { get, post };
}

module.exports = gstHeadController();