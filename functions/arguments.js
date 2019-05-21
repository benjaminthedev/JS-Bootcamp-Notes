//Multiple Arguments
// let add = function (a, b, c) {
//     return a + b + c;
// }

// let result = add(10, 20, 200);
// console.log(result);

//Default Args

let getScoreText = function (name = "Anoym", score = 0)  {
    //return 'Name: ' + name + '- Score ' + score;
    return `Name: ${name} and the score is ${score}`;
}

let scoreText = getScoreText('benjamin', 200);
console.log(scoreText);




// Tip calculator 

// let tipCalc = function (total, tipPercent = .2) {
//     return 'The total bill was $' + total + ' and the tip given was $' + total * tipPercent;  
// }

// let finalBill = tipCalc(100, undefined);
// console.log(finalBill);






//Using Template Strings
let name = 'benjamin';
let age = 36;
let drink = 'coffee';

console.log(`${name} is ${age} old and loves ${drink}`);