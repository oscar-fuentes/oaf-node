import { OAFModel } from "./index";

export class OAFUser extends OAFModel {

    public static local : OAFUser;

    public age          : number;

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

    public static signUp(user: OAFUser): Promise<OAFUser> {
        return user
            .save()
            .then(user => {
                OAFUser.local = user;
                return Promise.resolve(user);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }

}
