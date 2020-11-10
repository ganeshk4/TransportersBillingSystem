module.exports = (sequelize, DataTypes) => {
  const Code = sequelize.define('invoice_code', {
    invoice_code: DataTypes.TEXT
  }, {
    freezeTableName: true,
  });
  
  return Code;
};