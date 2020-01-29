function hi() {
    console.log('hello');
}

// hi;
// hi();
// console.log(hi);
console.log(hi());

// as soon as our parser see's that there is a function invocation, that happens immediately.


function numbers() {
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }
}

numbers();

let arr = ['This', 'is', 'really', 'cool'];

function arrlist() {
    for (let word of arr) {
        console.log(word);
    }
}

arrlist();

//  for(let i = 0; i <arr.length; i++) {
//      console.log(arr [i])
//  }

//  for(let word in arr) {
//      console.log(arr[word])
//  }