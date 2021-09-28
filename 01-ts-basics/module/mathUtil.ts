// ES6 Export - Named / Default 

import * as fortune from './getFortune';

console.log("Math Util", fortune.getLuckynumber())

const add = (a:number, b : number ) => a + b
// Default export
export default add;
