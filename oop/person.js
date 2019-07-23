const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age

}

const me = new Person('Benjamina', 'Dor', 36)

const person2 = new Person('david', 'davidson', 101)

me.firstName = 'Jess'


console.log(me)
console.log(person2)