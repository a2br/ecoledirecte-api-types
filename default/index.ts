// Careful here, this file exports the types available in the latest API version
// Thereby, things MAY break in the future
export * from "../v3";

import * as latest from "../v3";
/**
 * Default import: contains the same thing as root
 */
export default latest;
