export abstract class OAFModel {

    public readonly create_date?    : Date;
    public readonly identifier?     : String;
    public readonly update_date?    : Date;

    public constructor() {

    }

    public abstract name()          : String;

}
