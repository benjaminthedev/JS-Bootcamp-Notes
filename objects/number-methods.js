let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));


// let min = 1;
// let max = 5;


//let randomShiz = Math.floor(Math.random() * (max - min + 1)) + min;
//console.log(randomShiz);

//function


let makeGuess = function (makeGuessResult){  

    let min = 1;
    let max = 5;

    if (Math.floor(Math.random() * (max - min + 1)) + min === makeGuessResult){
        return true;
    } else {
        return false;
    }
}

console.log(makeGuess(4));