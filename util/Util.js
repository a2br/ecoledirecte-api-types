"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
class Util {
    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
    }
    /**
     *  @description Merges the given data and the default data to fill all the properties.
     */
    static mergeDefault(def, given) {
        if (!given)
            return def;
        for (const key in def) {
            if (!has(given, key) || given[key] === undefined) {
                given[key] = def[key];
            }
            else if (given[key] === Object(given[key])) {
                given[key] = Util.mergeDefault(def[key], given[key]);
            }
        }
        return given;
    }
    /**
     * @description Adds the given params to the url
     */
    static mergeParams(url, params) {
        if (!Object.keys(params).length)
            return url;
        const paramsS = Object.keys(params).map((key) => {
            return `${key}=${params[key]}`;
        });
        const finalUrl = [url, paramsS.join("&")].join("?");
        return finalUrl;
    }
}
exports.default = Util;
//# sourceMappingURL=Util.js.map