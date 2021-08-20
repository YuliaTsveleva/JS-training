// пример из кахута
const a = {}
const b = {key: 'b'}
const c = {key: 'c'}

a[b] = 1
a[c] = 2

console.log(a)
console.log (a[c])

// конструкторы
// имя с большой буквы
function Constructor(prop1, prop2=0) {
    this.prop1 = prop1
    this.prop2 = prop2
}
// {///} dspjd с помощью ключевого слова new
// call & construct
// по умолчанию call? функция вызывается
// с ключевым словом new создает новую сущность

const newObj = new Constructor(1)
console.log(newObj)

// example
const User = function (login, password) {
    this.login = login
    this.password = password

    this.showLogin = function () {
        console.log(this.login)
    }
}

User.prototype.showPassword = function () {
    console.log(this.password)
}

const user1 = new User('user', 'qweqwe')
console.log(user1)
// функция-конструктор через this указывает личные свойства объекта

console.log(User.prototype)

const user2 = new User('user2', 'poipoi')
console.log(user2)

// метод, записанный в прототип функции конструктора будет 
// доступен всем экземплярам, которые создаются из этой 
// функции - конструктора

// все методы нужно записывать в prototype

// новая фуекция на базе исходной
function NewUser(name, age, login, password) {
    User.call(this, login, password)
    this.name = name
    this.age = age
}

// перезаписываем prototype новой функции (чтобы подтянулись методы)
// и привязывем в него prototype из исходной

NewUser.prototype = Object.create(User.prototype)
NewUser.prototype.constructor = NewUser

// добавляем новые методы в prototype новой функции

NewUser.prototype.updateAge = function () {
    return (this.age +=1)
}

const newUser1 = new NewUser('Vova', 6, 'new user 1', 'ananas')
console.log(newUser1)

newUser1.showLogin()
newUser1.showPassword()
console.log(newUser1.updateAge())

