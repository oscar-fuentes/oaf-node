"use strict";
var Request = require("request");
var index_1 = require("./index");
var OAFModel = (function () {
    function OAFModel() {
    }
    Object.defineProperty(OAFModel.prototype, "json", {
        get: function () {
            return JSON.parse(JSON.stringify(this));
        },
        enumerable: true,
        configurable: true
    });
    OAFModel.query = function () {
        return new index_1.OAFQuery();
    };
    OAFModel.prototype.save = function () {
        var uri = index_1.OAFConfiguration.shared.uri;
        var apiKey = index_1.OAFConfiguration.shared.apiKey;
        var error;
        if (!apiKey) {
            error = index_1.OAFError.missingApiKey;
        }
        if (!uri) {
            error = index_1.OAFError.missingUri;
        }
        uri += "/api";
        uri += this.table() === "OAFUser" ? "/user" : "/model";
        uri += this.identifier ? "/update" : "/create";
        if (error) {
            return Promise.reject(error);
        }
        else {
            var json = this.json;
            var options_1 = {
                form: json,
                headers: {
                    "OAF-API-Authorization-Code": apiKey,
                    "Content-Type": "application/json"
                }
            };
            return new Promise(function (resolve, reject) {
                Request.post(uri, options_1, function (error, response, body) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode === 200) {
                            resolve(body.data);
                        }
                        else {
                            reject("Something went wrong.");
                        }
                    }
                });
            });
        }
    };
    return OAFModel;
}());
exports.OAFModel = OAFModel;
