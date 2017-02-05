import { TestConstant }                 from "./test-constant";
import { TestModel }                    from "./test-model";

import { OAFError, OAFConfiguration }   from "../lib/index";

describe("OAFQuery", () => {

    beforeEach(() => {
        OAFConfiguration.shared.adminKey    = TestConstant.adminKey;
        OAFConfiguration.shared.apiKey      = TestConstant.apiKey;
        OAFConfiguration.shared.uri         = TestConstant.uri;
    });

    it("cannot execute with an apiKey", (done) => {
        OAFConfiguration.shared.apiKey      = null;

        let query = TestModel.query();

        query
            .execute()
            .then(models => {
                expect(true).toBe(false);
                done();
            })
            .catch(error => {
                expect(error).toBe(OAFError.missingApiKey);
                done();
            });
    });

});
