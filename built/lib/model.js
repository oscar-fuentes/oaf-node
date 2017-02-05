"use strict";
var Request = require("request");
var index_1 = require("./index");
var OAFModel = (function () {
    function OAFModel() {
    }
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
        if (error) {
            return Promise.reject(error);
        }
        else {
            Request.post(uri, null, function (error, response, body) {
                if (error) {
                    return Promise.reject(error);
                }
                else {
                    if (response.statusCode === 200) {
                        return Promise.resolve([]);
                    }
                    else {
                        return Promise.reject("Something went wrong.");
                    }
                }
            });
            return Promise.resolve(this);
        }
    };
    return OAFModel;
}());
exports.OAFModel = OAFModel;
