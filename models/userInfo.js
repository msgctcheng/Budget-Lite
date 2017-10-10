module.exports = function(sequelize, DataTypes) {
  var UserInfo = sequelize.define("UserInfo", {
    name: DataTypes.STRING
  });  

  return UserInfo;
};