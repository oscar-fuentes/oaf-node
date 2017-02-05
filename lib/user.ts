import { OAFModel } from "./index";

export class OAFUser {

    public table(): string {
        return "OAFUser";
    }

    public static logIn(options: {
        emailAddress?   : string,
        password        : string,
        telephone?      : string,
        username?       : string }): Promise<void> {
        return Promise.reject(null);
    }

    public static signUp(user: OAFUser): Promise<void> {
        return Promise.reject(null);
    }

}
