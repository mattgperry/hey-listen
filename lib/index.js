"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HEY_LISTEN = 'Hey, listen! ';
var warning = function () { };
exports.warning = warning;
var invariant = function () { };
exports.invariant = invariant;
if (process.env.NODE_ENV !== 'production') {
    exports.warning = warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(HEY_LISTEN + message);
        }
    };
    exports.invariant = invariant = function (check, message) {
        if (!check) {
            throw new Error(HEY_LISTEN.toUpperCase() + message);
        }
    };
}
//# sourceMappingURL=index.js.map