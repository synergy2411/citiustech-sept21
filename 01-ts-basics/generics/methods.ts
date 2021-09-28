// Generics - <> - TypeSafe DataType



// function display<T, U>(a : T, b : U): void{
//     console.log(`A : ${typeof(a)}`)
//     console.log(`B : ${typeof(b)}`)
// }


// display<string, number>("Apple", 101);


// function addAtBeggining<T>(value : T, array : T[]) : T[]{
//     return [value, ...array]
// }

// const numberArray = addAtBeggining<number>(6, [5,4,3,2,1])
// // numberArray.push("Apple");
// numberArray.push(100);


// const strArray = addAtBeggining<string>("Apple", ["Guava", "Oranges"])

// // strArray.push(100);              // NOT OK

// strArray.push("Banana");            // OK


// function addAtBeginning(value : any, array : any[]) : any[]{
//     return [value, ...array];
// }

// const strArray = addAtBeginning("Apple", ["Oranges", "Grapes"]);

// strArray.push("Guava")

// strArray.push(100);             // OK

// console.log(strArray)           // ["Apple", "Oranges", "Grapes", "Guava"] 