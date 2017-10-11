var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {

            handlebarsObj = { budget : {"testing" : "works"}};
            res.render("index", handlebarsObj);

});



module.exports = router;
