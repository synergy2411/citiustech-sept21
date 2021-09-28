// Decorators : Annotation
// Annotation -> 
// - Prefixed with '@' 
// - Wrapper functions
// - Supply meta data
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// - Decorators Types : 
// Class - @Component({}), @Directive({}), @Pipes() , Method, Property, Parameter
// Decorators are simple functions, supplied with meta information, prefixed with '@'.
// function ReadOnly(target : any, key : string){
//     Object.defineProperty(target, key, {
//         writable : false,
//         configurable : false
//     })
// }
// class FooBar{
//     @ReadOnly
//     title : string;
//     constructor(){
//         this.title = "New Title"
//     }
//     getTitle(){
//         return this.title;
//     }
// }
// let foo2 = new FooBar();
// foo2.title = "Hello";
// console.log(foo2.getTitle());
// Decorator Factory
// function ValueChange(value : string){
//     return function(target : any, key: string){
//         Object.defineProperty(target, key,{
//             value
//         })
//     }
// }
// class FooBar{
//     @ValueChange("Bye bye")
//     title : string;
//     constructor(){
//         this.title = "Hello World"
//     }
//     getTitle(){
//         return this.title
//     }
// }
// let f = new FooBar()
// f.title = "GoodBye"
// console.log(f.getTitle());
// Multiple Decorators
// function First(){
//     console.log("First : Factory")
//     return function(target: any, key: string){
//         console.log("First : Decorator")
//     }
// }
// function Second(){
//     console.log("Second : Factory")
//     return function(target: any, key: string){
//         console.log("Second : Decorator")
//     }
// }
// function Third(target: any, key: string){
//     console.log("Third : Decorator")
// }
// class FooBar{
//     @First()
//     @Second()
//     @Third
//     title : string;
// }
// 
function Log(target, key) {
    console.log("Target", target);
    console.log("key", key);
}
function MyLog() {
    return function (target, key) {
        console.log("MyLog works");
    };
}
var FooBar = /** @class */ (function () {
    function FooBar() {
    }
    FooBar.prototype.method = function () { };
    __decorate([
        MyLog(),
        Log,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FooBar.prototype, "method", null);
    return FooBar;
}());
new FooBar().method();
