"use strict";
var Request = require("request");
var index_1 = require("./index");
var OAFQuery = (function () {
    function OAFQuery() {
    }
    OAFQuery.prototype.execute = function () {
        if (index_1.OAFConfiguration.shared.apiKey) {
            var uri = index_1.OAFConfiguration.shared.uri;
            if (uri) {
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
            }
            else {
                return Promise.reject(index_1.OAFError.missingUrl);
            }
        }
        else {
            return Promise.reject(index_1.OAFError.missingApiKey);
        }
    };
    return OAFQuery;
}());
exports.OAFQuery = OAFQuery;
