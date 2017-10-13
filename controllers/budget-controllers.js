var express = require("express");
var router = express.Router();
var db = require("../models");
var path = require("path");
var GoogleAuth = require('google-auth-library');

router.get("/", function(req, res) {
    handlebarsObj = {
        budget: {
            "testing": "works"
        }
    };
    res.render("index", handlebarsObj);
});

router.get("/login", function(req, res) {
    res.render("login");
});
router.get("/newuser", function(req, res) {
    res.render("new")
});

router.post("/login/verify", function(req, res) {
    var CLIENT_ID = '482330377038-kppprl611bgmbattktqroa9rl663dh2f.apps.googleusercontent.com';
    var token = req.body.idtoken;
    var auth = new GoogleAuth;
    var client = new auth.OAuth2(CLIENT_ID, '', '');
    console.log('token: ', token);

    client.verifyIdToken(
        token,
        CLIENT_ID,
        function(e, login) {
            var payload = login.getPayload();
            var userid = payload['sub'];
            console.log('payload: ', payload);
            console.log('userid: ', userid);
        });
});

router.get("/data.csv", function(req, res) {
	res.sendFile(path.join(__dirname, "data.csv"));
});

router.get("/api/transactions", function(req, res) {
    db.Transactions.findAll({})
        .then(function(dbTrans) {
            res.json(dbTrans);
        });
});

router.post("/api/transactions", function(req, res) {
    db.Transactions.create({
    	Balance: req.body.Balance,
    	Amount: req.body.Amount,
    	Description: req.body.Description,
    	Category: req.body.Category,
    	UserId: req.body.UserId
    })
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

router.post("/api/create", function(req, res) {
    db.User.create({
    	googleId: req.body.googleId,
    	name: req.body.name
    })
        .then(function(dbUser) {
            res.json(dbUser);
        });
});

module.exports = router;
