var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {    
            handlebarsObj = { budget : {"testing" : "works"}};
            res.render("index", handlebarsObj);
});

router.get("/login", function(req, res) {
	res.render("login");
});

router.get("/api/transactions", function(req, res) {
	db.Transactions.findAll({})
	.then(function(dbTrans) {
	  res.json(dbTrans);
	});
});

router.post("/api/transactions", function(req, res) {
	db.Transactions.create(req.body)
	.then(function(dbTrans) {
		res.json(dbTrans);
	});
});

router.get("/api/user", function(req, res) {
	db.User.findAll({
		include: [db.Transactions]
	}).then(function(dbUser) {
	  res.json(dbUser);
	});
});  

module.exports = router;
