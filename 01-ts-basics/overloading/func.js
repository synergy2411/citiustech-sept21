// function mystry(){
//     function chooseNumber (a : number){
//         return 7;
//     }
//     return chooseNumber;
//     function chooseNumber(){
//         return 12;
//     }
// }
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.myMethod = function (a, b) {
        if (b) {
            console.log("B Type : ", typeof (b));
        }
        console.log("A Type : ", typeof (a));
    };
    return Foo;
}());
var foo1 = new Foo();
foo1.myMethod(30);
foo1.myMethod("30");
foo1.myMethod(30, "Apple");
// foo1.myMethod(true);
