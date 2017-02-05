"use strict";
var test_constant_1 = require("./test-constant");
var index_1 = require("../lib/index");
describe("OAFUser", function () {
    beforeEach(function () {
        index_1.OAFConfiguration.shared.adminKey = test_constant_1.TestConstant.adminKey;
        index_1.OAFConfiguration.shared.apiKey = test_constant_1.TestConstant.apiKey;
        index_1.OAFConfiguration.shared.uri = test_constant_1.TestConstant.uri;
    });
    it("cannot sign up without an apiKey", function (done) {
        index_1.OAFConfiguration.shared.apiKey = null;
        var user = new index_1.OAFUser();
        index_1.OAFUser
            .signUp(user)
            .then(function () {
            expect(true).toBe(false);
            done();
        })
            .catch(function (error) {
            expect(error).toBe(index_1.OAFError.missingApiKey);
            done();
        });
        // let query                           = TestModel.query();
        //
        // query
        //     .execute()
        //     .then(models => {
        //         expect(true).toBe(false);
        //         done();
        //     })
        //     .catch(error => {
        //         expect(error).toBe(OAFError.missingApiKey);
        //         done();
        //     });
    });
});
