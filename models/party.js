module.exports = (sequelize, DataTypes) => {
  const Party = sequelize.define('party', {
    transporter_gstin: DataTypes.STRING,
    place_of_supply_state: DataTypes.STRING,
    party_name: DataTypes.STRING,
    billing_address: DataTypes.STRING,
    party_gstin: DataTypes.STRING,
    contract_startdate: DataTypes.DATE,
    contract_kms: DataTypes.INTEGER,
    contract_rate: DataTypes.FLOAT,
    contract_sgst: DataTypes.INTEGER,
    contract_cgst: DataTypes.INTEGER,
    contract_igst: DataTypes.INTEGER,
    contract_json: DataTypes.TEXT
  }, {
    freezeTableName: true,
  });
  
  return Party;
};