import { TestConstant }                         from "./test-constant";

import { OAFError, OAFConfiguration, OAFUser }  from "../lib/index";

describe("OAFUser", () => {

    beforeEach(() => {
        OAFConfiguration.shared.adminKey    = TestConstant.adminKey;
        OAFConfiguration.shared.apiKey      = TestConstant.apiKey;
        OAFConfiguration.shared.uri         = TestConstant.uri;
    });

    it("cannot sign up without an apiKey", (done) => {
        OAFConfiguration.shared.apiKey      = null;

        let user = new OAFUser();

        OAFUser
            .signUp(user)
            .then(() => {
                expect(true).toBe(false);
                done();
            })
            .catch(error => {
                expect(error).toBe(OAFError.missingApiKey);
                done();
            });
    });

    it("can sign up", (done) => {
        let user = new OAFUser();
        user.age = 23;

        OAFUser
            .signUp(user)
            .then(() => {
                expect(true).toBe(true);
                done();
            })
            .catch(error => {
                expect(true).toBe(false);
                done();
            });
    });

});
