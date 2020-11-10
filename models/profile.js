module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('transporter', {
    name: DataTypes.TEXT,
    title: DataTypes.TEXT,
    address: DataTypes.TEXT,
    telephone_and_email: DataTypes.TEXT,
    hsn: DataTypes.TEXT
  }, {
    freezeTableName: true,
  });
  
  return Profile;
};