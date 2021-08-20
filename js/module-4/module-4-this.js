// use strict
// this - local variable
// this - is a pronom of object for his props and methods

const user = {
    name: 'Vlad',
    showName() {
        console.log(this.name);
    }
}

user.showName()

console.log(this) //не в строгом режиме - window

console.log(this) //в строгом режиме - undefined

function showThis() {
    console.log(this)
}

// call и apply

const newUser = {
    name: 'Vova',
    age: 7,
}

user.showName.call(newUser);

const bestUser = {
    name: 'Yaros',
    age: 18
}

user.showName.apply(bestUser)