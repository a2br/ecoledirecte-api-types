export default class Util {
    constructor();
    /**
     *  @description Merges the given data and the default data to fill all the properties.
     */
    static mergeDefault(def: any, given: any): typeof def;
    /**
     * @description Adds the given params to the url
     */
    static mergeParams(url: string, params: Record<string, unknown>): string;
}
//# sourceMappingURL=Util.d.ts.map