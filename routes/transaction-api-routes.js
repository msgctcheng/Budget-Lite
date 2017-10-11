var db = require("../models");

module.exports = function(app) {

  app.get("/api/transactions", function(req, res) {
    db.Transactions.findAll({})
    .then(function(dbTrans) {
      res.json(dbTrans);
    });
  });

  app.post("/api/transactions", function(req, res) {
  	db.Transactions.create(req.body)
  	.then(function(dbTrans) {
  		res.json(dbTrans);
  	});
  });
};