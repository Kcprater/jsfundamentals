/*  
    - functions are a piece of code that perform a set of actions when called (invoked)
*/

// (1)    (2)
function hi() {
    console.log('hello');
}

/*  
    1. javascript keyword
    2. function name. Must be followed by () to hold a parameter.
*/

blah = function () {
    return lala;
    lala = "hi";
  };
  console.log(blah());

  function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 2, 3, 4));
  
  function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());

 function whatDoesItDo(val) {
    return val ? 1 : 2;
  }; 
  console.log('whatDoesItDo')