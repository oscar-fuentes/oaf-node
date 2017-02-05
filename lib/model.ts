import { OAFQuery } from "./index";

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

}
