module.exports = (sequelize, DataTypes) => {
  const Code = sequelize.define('invoicecode', {
    invoicecode: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    freezeTableName: true,
  });

  Code.associate = function(models) {
    Code.hasMany(models.party, {
      foreignKey: 'invoicecodeId'
    });
  }
  
  return Code;
};