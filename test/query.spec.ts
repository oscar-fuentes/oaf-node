import { TestConstant } from "./test-constant";
import { TestModel }    from "./test-model";

import { OAFError }     from "../lib/index";

describe("OAFQuery", () => {

    it("cannot execute with an apiKey", (done) => {
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
