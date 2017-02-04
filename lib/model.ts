import { OAFQuery } from "./index";

export abstract class OAFModel {

    public readonly create_date?    : Date;
    public readonly identifier?     : String;
    public readonly update_date?    : Date;

    public constructor() {

    }

    public abstract name()          : String;

    public static query<T extends OAFModel>(this: { new (): T }): OAFQuery<T> {
        return new OAFQuery<T>();
    }

}
