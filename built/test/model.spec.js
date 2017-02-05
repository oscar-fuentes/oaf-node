"use strict";
var test_constant_1 = require("./test-constant");
var test_model_1 = require("./test-model");
var index_1 = require("../lib/index");
describe("OAFModel", function () {
    beforeEach(function () {
        index_1.OAFConfiguration.shared.adminKey = test_constant_1.TestConstant.adminKey;
        index_1.OAFConfiguration.shared.apiKey = test_constant_1.TestConstant.apiKey;
        index_1.OAFConfiguration.shared.uri = test_constant_1.TestConstant.uri;
    });
    it("cannot save without an apiKey", function (done) {
        index_1.OAFConfiguration.shared.apiKey = null;
        var model = new test_model_1.TestModel();
        model
            .save()
            .then(function (model) {
            expect(true).toBe(false);
            done();
        })
            .catch(function (error) {
            expect(error).toBe(index_1.OAFError.missingApiKey);
            done();
        });
    });
});
