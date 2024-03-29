module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('bank_details', {
    ac_name: DataTypes.TEXT,
    bank_name: DataTypes.TEXT,
    bank_ac_number: DataTypes.TEXT,
    ifsc: DataTypes.TEXT,
    branch: DataTypes.TEXT
  }, {
    freezeTableName: true,
  });

  Bank.associate = function(models) {
    Bank.belongsTo(models.transporter, {
      foreignKey: 'userId'
    });
  }
  
  return Bank;
};