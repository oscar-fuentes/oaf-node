import * as Request                             from "request";
import { OAFConfiguration, OAFError, OAFQuery } from "./index";

export abstract class OAFModel {

    public readonly create_date?    : Date;
    public readonly identifier?     : string;
    public readonly update_date?    : Date;

    public constructor() {

    }

    public abstract table()         : string;

    public static query<T extends OAFModel>(this: { new (): T }): OAFQuery<T> {
        return new OAFQuery<T>();
    }

    public save(): Promise<this> {
        let uri     = OAFConfiguration.shared.uri;
        let apiKey  = OAFConfiguration.shared.apiKey;

        var error   : OAFError;

        if (!apiKey) {
            error   = OAFError.missingApiKey;
        }

        if (!uri) {
            error   = OAFError.missingUri;
        }

        if (error) {
            return Promise.reject(error);
        } else {
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

            return Promise.resolve(this);
        }
    }

}
