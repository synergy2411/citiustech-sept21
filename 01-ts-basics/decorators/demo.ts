// Decorators : Annotation
// Annotation -> 
// - Prefixed with '@' 
// - Wrapper functions
// - Supply meta data

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

function Log(target : any, key: string){
    console.log("Target", target)
    console.log("key", key)
}

function MyLog(){
    return function(target : any, key: string){
        console.log("MyLog works")
    }
}

class FooBar{
    @MyLog()
    @Log
    method(){}
}
new FooBar().method()