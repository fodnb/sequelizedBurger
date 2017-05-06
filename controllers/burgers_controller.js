// var express = require('express');
// var router = express.Router();
// var burger = require('../models/burger.js');

// create the router for the app and export the router at the end of the file

// setting up a function to retrieve data from mysql and render it to the page.  Gathers information from handlebar
// object and pushes the information into the index.handlebars page to use when a / is recieved from client

module.exports = function(app){

app.get("/", function(request, response) {
  // burger.all(function(data) {
  //   var hbsObject = {
  //     burgers: data
  //   };
  //   console.log(hbsObject);
  //   response.render("index", hbsObject);
  // });
  db.burger.findAll({}).then(function(result){

    var theBurgers = {
      allburgers: result
    };
    // response.json(result);
    response.render("index", theBurgers);
  });
});



app.post("/", function(request, response) {
  // burger.create([
  //   "burger_name", "devoured"
  // ], [
  //   request.body.newburger, false
  // ], function() {
  //   response.redirect("/");
  // });
  db.burger.create({
    burger_name: request.body.newburger,
    devoured: false
  }).then(function(result){
    // response.json(result);
    response.redirect("/");
  })


});

app.put("/:id", function(request, response) {
  var condition = "id = " + request.params.id;

  console.log("condition", condition);

//   burger.update({
//     devoured: request.body.devoured
//   }, condition, function() {
//     response.redirect("/");
//   });
// });
  db.burger.update({
    devoured: request.body.devoured
  }).then(function(result){
    // response.json(result);
    response.redirct("/");
  })


});
}
// Export routes for server.js to use.



