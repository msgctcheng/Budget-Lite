var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
    // db.Burger.findAll({})
    //     .then(function(dbBurger) {
    //         var burgerArray = [];

    //         for (burg in dbBurger) {
    //             burgerArray.push(dbBurger[burg].dataValues);
    //         }

    //         var handlebarsObj = {
    //             burgers : burgerArray
    //         }
            // console.log("database: ", handlebarsObj);
            handlebarsObj = { budget : {"testing" : "works"}};
            res.render("index", handlebarsObj);
        // });


});



module.exports = router;
