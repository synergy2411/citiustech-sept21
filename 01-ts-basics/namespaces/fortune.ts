// Namespace 
// - logical grouping of inter-related functionality
// - function, classes, const etc
// - avoids global pollution in app

namespace FortuneUtil {
    export function getFortune(){
        return "Today is your lucky day!"
    }
    export function getLuckyNumber(){
        return  Math.round(Math.random() * 100)
    }
    export const MAGIC_NUMBER = Math.round(Math.random() * 100)
}