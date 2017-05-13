var express = require('express');
var router = express.Router();
// var connection = require('../config/connection.js');
var db = require('../models');

// create the router for the app and export the router at the end of the file

// setting up a function to retrieve data from mysql and render it to the page.  Gathers information from handlebar
// object and pushes the information into the index.handlebars page to use when a / is recieved from client

// module.exports = function(app){

router.get("/", function(request, response) {

  db.burgersSequel.findAll({}).then(function(result){

    var theBurgers = {
      burgers: result
    };
    response.render("index", theBurgers);
  });
  

});

  

router.post("/", function(request, response) {

  db.burgersSequel.create({
    burger_name: request.body.newburger,
    devoured: false
  }).then(function(result){
    // response.json(result);
    response.redirect("/");
  })


});

router.put("/:id", function(request, response) {
  var condition = "id = " + request.params.id;

  console.log("condition", condition);
  console.log(request.params.id);
  console.log(request.body.devoured);


db.burgersSequel.update({
  devoured: request.body.devoured,
}, {
  where: {
      id: request.body.id
    }
  
}).then(function(result){

    response.redirect("/");
  })



});



module.exports = router;


