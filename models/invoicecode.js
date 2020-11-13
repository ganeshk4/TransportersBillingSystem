module.exports = (sequelize, DataTypes) => {
  const Code = sequelize.define('invoicecode', {
    invoicecode: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    freezeTableName: true,
  });
  
  return Code;
};