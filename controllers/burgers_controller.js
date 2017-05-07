var express = require('express');
var router = express.Router();
var db = require('../models');

// create the router for the app and export the router at the end of the file

// setting up a function to retrieve data from mysql and render it to the page.  Gathers information from handlebar
// object and pushes the information into the index.handlebars page to use when a / is recieved from client

// module.exports = function(app){

router.get("/", function(request, response) {
  // burger.all(function(data) {
  //   var hbsObject = {
  //     burgers: data
  //   };
  //   console.log(hbsObject);
  //   response.render("index", hbsObject);
  // });
  db.burgersSequel.findAll({}).then(function(result){

    var theBurgers = {
      burgers: result
    };
    response.render("index", theBurgers);
  });
  

});

  

router.post("/", function(request, response) {
  // burger.create([
  //   "burger_name", "devoured"
  // ], [
  //   request.body.newburger, false
  // ], function() {
  //   response.redirect("/");
  // });


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
//   burger.update({
//     devoured: request.body.devoured
//   }, condition, function() {
//     response.redirect("/");
//   });
// });
//   db.burgersSequel.update({
//      devoured: request.body.devoured
     
//     where: {
//    id: request.params.id;
//   }
// }
//   }).then(function(result){
//     // response.json(result);
//     response.redirect("/");
//   })

db.burgersSequel.update({
  devoured: request.body.devoured,
}, {
  where: {
      id: request.params.id
    }
  
}).then(function(result){

    response.redirect("/");
  })



});



module.exports = router;


