// Namespace 
// - logical grouping of inter-related functionality
// - function, classes, const etc
// - avoids global pollution in app

/// <reference path="./magicNumber.ts" />

namespace FortuneUtil {
    export function getFortune(){
        return "Today is your lucky day!"
    }
    export function getLuckyNumber(){
        return  MagicNumber.MAGIC_NUMBER
    }
    
    export class Animal{

    }
}