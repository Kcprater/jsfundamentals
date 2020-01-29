//  (1)     (2)
let hi = () => {
    console.log('hello');
}

/*  
    1. all fat arrow functions need to be set to a variable
    2. the fat arrow signifies that this is a function

    - arrow functions are the shorthand way to write a function expression = not declaration
        - fat arrow functions do not get hoisted since they are function expressions
*/

// CONCISE BODY
let hi = () => console.log('hello'); // return is implicit and happens by default
hi ();

// BLOCK BODY
let hi = () => {
    console.log('hello');
    // return keyword must be present inside of block body arrow function
}
hi ();

// CONCISE vs BLOCK

let apples = num => console.log(`There are ${num} apples.`);
apples (10)

let counting = num => {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}
counting (20);


/*  
    - if there are no parameters, we have to have the parens ()
    - if there is a single parameter do not need but can use parens ()
    - if there are two or more parameters, we have to include parens ()
*/