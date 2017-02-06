import * as Request                             from "request";
import { OAFConfiguration, OAFError, OAFQuery } from "./index";

export abstract class OAFModel {

    public readonly create_date?    : Date;
    public readonly identifier?     : string;
    public readonly update_date?    : Date;

    public constructor() {

    }

    public abstract table()         : string;

    public get json()               : any {
        return JSON.parse(JSON.stringify(this));
    }

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

        uri         += "/api";
        uri         += this.table() === "OAFUser" ? "/user" : "/model";
        uri         += this.identifier ? "/update" : "/create";

        if (error) {
            return Promise.reject(error);
        } else {
            let json    = this.json;
            let options  = {
                form    : json,
                headers : {
                    "OAF-API-Authorization-Code"    : apiKey,
                    "Content-Type"                  : "application/json"
                }
            };

            return new Promise((resolve, reject) => {
                Request.post(uri, options, (error: any, response: Request.RequestResponse, body: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode === 200) {
                            resolve(body.data as this);
                        } else {
                            reject("Something went wrong.");
                        }
                    }
                });
            });
        }
    }

}
