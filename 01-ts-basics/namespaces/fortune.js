// Namespace 
// - logical grouping of inter-related functionality
// - function, classes, const etc
// - avoids global pollution in app
/// <reference path="./magicNumber.ts" />
var FortuneUtil;
(function (FortuneUtil) {
    function getFortune() {
        return "Today is your lucky day!";
    }
    FortuneUtil.getFortune = getFortune;
    function getLuckyNumber() {
        return MagicNumber.MAGIC_NUMBER;
    }
    FortuneUtil.getLuckyNumber = getLuckyNumber;
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    FortuneUtil.Animal = Animal;
})(FortuneUtil || (FortuneUtil = {}));
