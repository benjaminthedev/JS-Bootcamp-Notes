const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}
const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
console.log(me.getBio())
const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio())


const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}
const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
console.log(me.getBio())
const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio())