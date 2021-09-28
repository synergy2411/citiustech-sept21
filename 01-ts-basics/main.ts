/// <reference path="./namespaces/fortune.ts" />

class Human{
    getMyLuckyNumber(){
        return FortuneUtil.getLuckyNumber()
    }
    getDailyFortune(){
        return FortuneUtil.getFortune()
    }
}

let foobar = new Human();

console.log(foobar.getMyLuckyNumber());
console.log(foobar.getDailyFortune());
// console.log("MAGIC NUMBER : ", FortuneUtil.MAGIC_NUMBER);

let theTiger = new FortuneUtil.Animal();
