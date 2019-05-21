// const toDo = ['Item One', 'Item Two', 'Item Three', 'Item Four', 'Item Five'];

// console.log(toDo);

// console.log(`You have ${toDo.length} items to do today, your first item is ${toDo[0]} and the last item is ${toDo[toDo.length - 1]}`);

// console.log(`You have ${toDo.length} todos!`);


// toDo.splice(2, 1);

// toDo.push('Buy More Coffee');
// toDo.shift();






// toDo[2] = 'this is a new one note';

// toDo.forEach(function (item, index) {
//     console.log(index);
//     console.log(item);
// })



// toDo.forEach(function(toDo, index){
//     const num = index + 1;
//     console.log(`${num}. ${toDo}`);
// })



//Counting to ....1

// for(let count = 0; count <= 2; count++){
//     console.log(count);
// }


// for (let count = 0; count < toDo.length; count++) {
//     const num = count + 1;
//     const todo = toDo[count]
//     console.log(`${num}.${toDo[count]}`);

    
    /*
        This is how I did it
    console.log(`${num}.${toDo[count]}`);*/
//}




const toDo = [{
    text: 'Item One',
    completed: true
},{
    text: 'Item Two',
    completed: true
},{
    text: 'Item Three',
    completed: true
},{
    text: 'Item Four',
    completed: false
},{
    text: 'Item Five',
    completed: false
}]


/*

Task is to sory by completed

MDN Sort method
*/


//Finding the todo!
const findToDo = function(toDo, toDoText){
    return toDo.find(function(text, index){
        return text.text.toLowerCase() === toDoText.toLowerCase();
    });
}
//Output
const searchToDo = findToDo(toDo, 'Item Two');
console.log(searchToDo);
//console.log(toDo);


//Deleting the todo 
const deleteTodo = function(toDo, toDoText){

    const index = toDo.findIndex(function(toDo){
        return toDo.text.toLowerCase() === toDoText.toLowerCase();
    });

    if(index > -1){
        console.log('match');
        toDo.splice(index, 1);
    }


    // return toDo.indexOf(function(text, index){
    //     return text.text.toLowerCase() === toDoText.toLowerCase();
    // });
}



const getThingsToDo = function (toDo){
    return toDo.filter(function(toDo){
        return toDo.completed === false 
    })
}

console.log(getThingsToDo(toDo));



//Output
// deleteTodo(toDo, 'item four');
// console.log(toDo);




