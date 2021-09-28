"use strict";
// Named Exports
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFortune = exports.getLuckynumber = void 0;
console.log("Get Fortune");
var MAGIC_NUMBER = Math.round(Math.random() * 100);
var getLuckynumber = function () {
    return MAGIC_NUMBER;
};
exports.getLuckynumber = getLuckynumber;
var getFortune = function () { return "Today is your lucky day"; };
exports.getFortune = getFortune;
