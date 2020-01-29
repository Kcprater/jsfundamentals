function hi(name) {
    console.log(`Hello, ${name}`);
}

hi('Kris');

function kris(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`)
}

kris('sandwich');

function counter(number, string) {
    for (i = 0; i <= number; i++) {
    // for (let i = 0; i <= 10; i++) {
        console.log(i)
    }

    console.log(string);
}

counter(10, 'hello');
// counter(1); - can run function infinite times

function myName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    console.log(`Hello, my name is ${fullName}`)
}

myName('Kris', 'Prater.');