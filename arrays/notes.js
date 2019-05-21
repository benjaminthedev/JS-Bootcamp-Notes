const notes= [{
    title: 'My Next Trip',
    body: 'I would like to go to France'
}, {
        title: 'Next Book To Read',
        body: 'Would be all about coding'
}, {
        title: 'Habbits to improve on',
        body: 'Exercise, Eating nice food'
}, {
        title: 'Car Mods',
        body: 'New Breaks and tools'
}];


// console.log(notes.pop());
// notes.push('My new notes');

// console.log(notes.shift()); 
// notes.unshift('My first itemsssss');


// notes.splice(0, 0, 'Another one baby xxxx');


// notes[2] = 'this is a new one note';

// notes.forEach(function(item, index){
//     console.log(index);
//     console.log(item);
// })


// console.log(notes.length);
//console.log(notes[notes.length - 2 ]);
// console.log(notes);

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count]);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count]);
// }

//console.log(notes.indexOf({}));

// const findNote = function (notes, noteTitle){
//         const index = notes.findIndex(function(note, index){
//              return note.title.toLowerCase() === noteTitle.toLowerCase();   
//         });
//         return notes[index];
// }

// const findNote = function (notes, noteTitle) {
//         const index = notes.findIndex(function (note, index) {
//                 return note.title === noteTitle;
//         });
//         return notes[index];
// }

const sortNotes = function (notes) {
        notes.sort(function(a, b){
                if (a.title.toLowerCase() < b.title.toLowerCase() ){
                         return - 1;         
                } else if (b.title.toLowerCase() < a.title.toLowerCase() ){
                         return 1;         
                 } else {
                         return 0;
                 }      
        });
}       

// const findNote = function (notes, noteTitle) {
//         return notes.find(function (note, index) {
//                 return note.title === noteTitle;
//         });        
// }

// const note = findNote(notes, 'Next Book To Read');
// console.log(note);


// const index = notes.findIndex(function (notes, index) {
//         console.log(notes);     
//         return notes.title === 'Car Mods';
// });

// console.log(index);

sortNotes(notes);
console.log(notes);