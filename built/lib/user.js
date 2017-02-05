"use strict";
var OAFUser = (function () {
    function OAFUser() {
    }
    OAFUser.prototype.table = function () {
        return "OAFUser";
    };
    OAFUser.logIn = function (options) {
        return Promise.reject(null);
    };
    OAFUser.signUp = function (user) {
        return Promise.reject(null);
    };
    return OAFUser;
}());
exports.OAFUser = OAFUser;
