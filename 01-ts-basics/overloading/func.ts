// function mystry(){
//     function chooseNumber (a : number){
//         return 7;
//     }
//     return chooseNumber;
//     function chooseNumber(){
//         return 12;
//     }
// }


class Foo {
    myMethod(a : number);
    myMethod(a : string);
    myMethod(a : number, b : string);
    myMethod(a :any, b? : any){
        if(b){
            console.log("B Type : ", typeof(b))
        }
        console.log("A Type : ", typeof(a))
    }
}

let foo1 = new Foo();

foo1.myMethod(30);
foo1.myMethod("30");
foo1.myMethod(30, "Apple");
// foo1.myMethod(true);