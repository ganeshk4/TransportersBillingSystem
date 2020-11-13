module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('transporter', {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone_and_email: DataTypes.STRING,
    hsn: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  
  return Profile;
};