"use strict";
var test_model_1 = require("./test-model");
var index_1 = require("../lib/index");
describe("OAFQuery", function () {
    it("cannot execute with an apiKey", function (done) {
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
