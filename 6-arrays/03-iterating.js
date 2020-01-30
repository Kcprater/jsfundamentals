/*  
    - the forEach() method executes a provided function once for each element in an array
    - the forEach() method does the same thing as far as a for of loop - both iterate over properites in an array
*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];

// for (let i = 0; i < food.length; i++) {
    // console.log(food[i]);
// }

// food.forEach (foodItem => console.log(foodItem));

// foodItem = 'Pecan Pie';
// foodItem = "Shrimp";
// foodItem = 'Quesadilla';

// food.forEach(individualFoodItem => {
    // console.log(individualFoodItem);
// }   )

// food.forEach(function(foodItem) {
//     console.log(foodItem)
// })

food.forEach(function(foodItem, index) {
    console.log(foodItem, index)
})

let movies = ['Jaws', 'Shrek', 'ET'];

movies.push('Cars'); console.log(movies);

movies.splice(1, 1, 'Frozen'); console.log(movies);

movies.forEach(list => console.log(list))

