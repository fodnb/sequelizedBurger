module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allownull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultvalue: false
        }

    });
    return burger;
}















//old code from burger.js
// var orm = require('../config/orm.js');

// var burger = {

//     all: function(cb) {
//         orm.all("burgers", function(res) {
//             cb(res);
//         });
//     },
//     create: function(cols, vals, cb) {
//         orm.create("burgers", cols, vals, function(res) {
//             cb(res);
//         });
//     },
//     update: function(objColVals, condition, cb) {
//         orm.update("burgers", objColVals, condition, function(res) {
//             cb(res);
//         });
//     }
// }

// module.exports = burger;
