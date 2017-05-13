var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");

// var PORT = process.env.PORT || 3000;
var PORT = process.env.PORT || 8080;

var app = express();


app.use("/cssfiles", express.static(__dirname + "/public/assets"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);



// router.initalize(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});