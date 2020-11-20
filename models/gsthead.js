module.exports = (sequelize, DataTypes) => {
  const gstHead = sequelize.define('gsthead', {
    gsthead: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    freezeTableName: true,
  });
  
  gstHead.associate = function(models) {
    gstHead.hasMany(models.party, {
      foreignKey: 'gstheadId'
    });
  }
  return gstHead;
};