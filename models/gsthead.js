module.exports = (sequelize, DataTypes) => {
  const gstHead = sequelize.define('gsthead', {
    gsthead: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    freezeTableName: true,
  });
  
  return gstHead;
};