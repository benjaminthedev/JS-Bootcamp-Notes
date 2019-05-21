let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 234
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);
    

let person = {
    name: 'Benjamin',
    age: 36,
    location: 'In the woods'
}

console.log(`${person.name} is ${person.age} and is from ${person.location}`);

person.age = 37;

console.log(`${person.name} is ${person.age} and is from ${person.location}`);