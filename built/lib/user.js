"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require("./index");
var OAFUser = (function (_super) {
    __extends(OAFUser, _super);
    function OAFUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OAFUser.prototype.table = function () {
        return "OAFUser";
    };
    OAFUser.logIn = function (options) {
        return Promise.reject(null);
    };
    OAFUser.signUp = function (user) {
        return user
            .save()
            .then(function (user) {
            OAFUser.local = user;
            return Promise.resolve(user);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    return OAFUser;
}(index_1.OAFModel));
exports.OAFUser = OAFUser;
