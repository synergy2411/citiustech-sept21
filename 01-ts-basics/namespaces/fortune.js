// Namespace 
// - logical grouping of inter-related functionality
// - function, classes, const etc
// - avoids global pollution in app
var FortuneUtil;
(function (FortuneUtil) {
    function getFortune() {
        return "Today is your lucky day!";
    }
    FortuneUtil.getFortune = getFortune;
    function getLuckyNumber() {
        return Math.round(Math.random() * 100);
    }
    FortuneUtil.getLuckyNumber = getLuckyNumber;
    FortuneUtil.MAGIC_NUMBER = Math.round(Math.random() * 100);
})(FortuneUtil || (FortuneUtil = {}));
