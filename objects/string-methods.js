let name = '   Benjamin Dordoigne   ';

console.log(name.length);     

console.log(name.toUpperCase());     

console.log(name.toLowerCase());     

    //  let password = 'abc123password098';

    //  console.log(password.includes('password'));

    // if (password.includes('passssword') == true){
    //      console.log('The password contains password you idiots.....');
    //  } else {
    //      console.log(`You're not so stupid afterall..`)
    //  }



     //trim

     //console.log(name.trim());

     //challenge.




    let isValidPassword = function(password){

        return password.length > 8 && !password.includes('password');




    };

console.log(isValidPassword('password'));
console.log(isValidPassword('abc123passord098'));
console.log(isValidPassword('pazz'));



