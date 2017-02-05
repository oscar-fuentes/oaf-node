"use strict";
var index_1 = require("./index");
var OAFModel = (function () {
    function OAFModel() {
    }
    OAFModel.query = function () {
        return new index_1.OAFQuery();
    };
    return OAFModel;
}());
exports.OAFModel = OAFModel;
