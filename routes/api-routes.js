var db = require("../models");

module.exports = function(app) {

  app.get("/api/userInfo", function(req, res) {
    db.UserInfo.findAll({}).then(function(dbUserInfo) {
      res.json(dbUserInfo);
    });
  });  
};