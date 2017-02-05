"use strict";
var test_constant_1 = require("./test-constant");
var test_model_1 = require("./test-model");
var index_1 = require("../lib/index");
describe("OAFQuery", function () {
    beforeEach(function () {
        index_1.OAFConfiguration.shared.adminKey = test_constant_1.TestConstant.adminKey;
        index_1.OAFConfiguration.shared.apiKey = test_constant_1.TestConstant.apiKey;
        index_1.OAFConfiguration.shared.uri = test_constant_1.TestConstant.uri;
    });
    it("cannot execute with an apiKey", function (done) {
        index_1.OAFConfiguration.shared.apiKey = null;
        var query = test_model_1.TestModel.query();
        query
            .execute()
            .then(function (models) {
            expect(true).toBe(false);
            done();
        })
            .catch(function (error) {
            expect(error).toBe(index_1.OAFError.missingApiKey);
            done();
        });
    });
});
