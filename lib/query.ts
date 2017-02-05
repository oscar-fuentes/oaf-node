import * as Request                             from "request";
import { OAFModel, OAFConfiguration, OAFError } from "./index";

export class OAFQuery<T extends OAFModel> {

    public constructor() {

    }

    public execute(): Promise<T[]> {
        if (OAFConfiguration.shared.apiKey) {
            let uri = OAFConfiguration.shared.uri;

            if (uri) {
                Request.post(uri, null, (error: any, response: Request.RequestResponse, body: any) => {
                    if (error) {
                        return Promise.reject(error);
                    } else {
                        if (response.statusCode === 200) {
                            return Promise.resolve([]);
                        } else {
                            return Promise.reject("Something went wrong.");
                        }
                    }
                });

            } else {
                return Promise.reject(OAFError.missingUri);
            }
        } else {
            return Promise.reject(OAFError.missingApiKey);
        }
    }

}
