let myAccount = {
    name: 'Benjamin Dordoigne',
    expenses: 0,
    income: 0
}

let addExpenses = function (account, amount) {
    account.expenses = account.expenses + amount;
    console.log(account);
}

addExpenses(myAccount, 2.50);
console.log(myAccount);


let addIncome = function (account, income) {
    account.income = account.income + income;    
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}
 
let getAccountSummary = function (account){

    let balanace = account.income;

    //account.balance = myAccount.income - myAccount.expenses;
    account.income = account.income - amount;
}




//console.log(`Bens Acc is ${myAccount.income}, he has ${myAccount.expenses} in expenses and ${} `);






//addIncome
//resetAccount



//getAccountSummary









