/* 
    - forOf loops look at the iterable properties of an array
    - can't use forOF loops on objects because objects are enumerable, not iterable
*/

// let student = {
//     name: 'kris',
//     awesome: true,
//     degree: "javascript",
//     week: 1
// }

// for (let item of student) {
//     console.log(item);
// }
// above is an object, does not work forOF

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];

for (let dog of dogArray) {
    console.log(dog, 'goes bark');
}





