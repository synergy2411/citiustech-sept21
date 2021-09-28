/// <reference path="./namespaces/fortune.ts" />
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.getMyLuckyNumber = function () {
        return FortuneUtil.getLuckyNumber();
    };
    Human.prototype.getDailyFortune = function () {
        return FortuneUtil.getFortune();
    };
    return Human;
}());
var foobar = new Human();
console.log(foobar.getMyLuckyNumber());
console.log(foobar.getDailyFortune());
// console.log("MAGIC NUMBER : ", FortuneUtil.MAGIC_NUMBER);
var theTiger = new FortuneUtil.Animal();
