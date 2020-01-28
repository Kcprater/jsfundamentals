let weather = 60

if (weather < 50) {
    console.log("Wear a jacket!")
} else {
    console.log("No jacket necessary!")
}

let name = 'Kris Prater';

if (name == 'Kri Prater') {
    console.log('Hello, name is ' + name + "." )
} else {
   console.log('Hello, is your name' + name + "?");
   console.log(`Hello, is your name ${name}?`)
}

let name = 'ZAchAry';

//let firstletter = name[0]
//console.log(name[0])
//console.log(name.char)

if (name[0] == name[0].toUpperCase()){
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log(isUpperCase);
} else {
    let isNotUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(isNotUpperCase);
}

let age = 22;
 
if (age >= 25) {
    console.log('You can rent a car!');
} else if (age >= 21) {
    console.log('You can drink!');
} else if (age >= 18) { 
    console.log('You can vote!');
} else {
    console.log('sorry')
}

