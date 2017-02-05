import { OAFModel } from "./index";

export class OAFUser {

    public name(): string {
        return "OAFUser";
    }

    public static logIn(user: OAFUser): Promise<void> {
        return Promise.reject(null);
    }

    public static signUp(user: OAFUser): Promise<void> {
        return Promise.reject(null);
    }

}
