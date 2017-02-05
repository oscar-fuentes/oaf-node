export class OAFConfiguration {

    public static shared    = new OAFConfiguration();

    public adminKey?        : string;
    public apiKey?          : string;
    public uri?             : string;

    private constructor() {

    }

}
