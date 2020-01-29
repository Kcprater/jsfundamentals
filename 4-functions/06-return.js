let name = () => {
    return 'Kris';
}

let myNameIs = name();
console.log(myNameIs);

function tipCalc(bill) {
    let tip = bill * 0.14;
    // let totalBill = 
    return tip.toFixed(2);
}

let totalTip = tipCalc (19.84);
console.log(totalTip)

let tipCalc = bill => (bill *0.2).toFixed(2);
let totalTip = tipCalc (19.84);
console.log(totalTip);





// my attempt below
let total = num => console.log(`The total amount is ${num}`);
let tip = 1.20
let bill = 100
let num = tip * bill

let apples = num => console.log(`There are ${num} apples.`);
apples (10)
