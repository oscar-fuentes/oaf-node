import { TestConstant }                 from "./test-constant";
import { TestModel }                    from "./test-model";

import { OAFError, OAFConfiguration }   from "../lib/index";

describe("OAFModel", () => {

    beforeEach(() => {
        OAFConfiguration.shared.adminKey    = TestConstant.adminKey;
        OAFConfiguration.shared.apiKey      = TestConstant.apiKey;
        OAFConfiguration.shared.uri         = TestConstant.uri;
    });

    it("cannot save without an apiKey", (done) => {
        OAFConfiguration.shared.apiKey      = null;

        let model = new TestModel();
        model
            .save()
            .then(model => {
                expect(true).toBe(false);
                done();
            })
            .catch(error => {
                expect(error).toBe(OAFError.missingApiKey);
                done();
            });
    });

});
