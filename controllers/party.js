let db = require('../models');
let model = db.party;

let partyController = () => {

  async function getAllParties() {
    return await model.findAll();
  }

  const get = async function (req, res) {
    const records = await getAllParties();
    res.status(200);
    res.json({data: records});
  }

  const post = async function (req, res) {
    let body = req.body;
    let transporterDetails = body.yourDetails;
    let partyDetails = body.partyDetails;
    let allCriteria = body.allCriteria;
    return model
      .create({
        gstheadId: transporterDetails.gstin,
        invoicecodeId: transporterDetails.invoice_code,
        place_of_supply_state: transporterDetails.place,
        party_name: partyDetails.name,
        billing_address: partyDetails.address,
        party_gstin: partyDetails.gstin,
        contract_startdate: allCriteria.contractStartDate,
        contract_kms: allCriteria.kilometerCriteria.km,
        contract_rate: allCriteria.kilometerCriteria.rate,
        contract_sgst: allCriteria.gstCriteria.sgst,
        contract_cgst: allCriteria.gstCriteria.cgst,
        contract_igst: allCriteria.gstCriteria.igst,
        contract_json: allCriteria.contractCriteria
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

module.exports = partyController();