// Прототипное наследование
// свойство __proto__











// example2

const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
}
 
User.prototype.changeMail = function (newMail) {
    this.email = newMail;
}

const mango = new User({ email: 'mango@mail.com', password: 1111111 })

mango.changeMail('my-new-mail@gmail.com')

console.log(mango)

// 1. у каждого объекта есть свойоство __proto__
// 2. в это свойстве лежит ссылка на его прототип, т.е. другой объект
// 3. При создании литерала объекта (массива, функции) в свойство 
// __proto__ записывается ссылка на Функция.prototypу

const objA = {
    x: 5,
}

console.log(objA.__proto__ === Object.prototype)

// 4. Функция-конструктор это просто функция
// 5. Всю магия происходит благодаря оператору new
// 6. Если функция вызывается через new, создается пустой объект где-то в памяти
// 7. Функция-конструктор вызывается в контексте созланного объекта, т.е. ее this ссылается на тот объект
// 8. В свойство this.__proto__ записывается ссылка на объект Функция.prototype
// 9. Ссылка на объект возвращается в место вызова new Фукнция()


// Статические свойства и методы
// Статические свойства и методы доступны только на самом констукторе
// В статических методах не нужен this

User.message = 'Я статическое свойство, меня нет на экземплярах или в прототипе'

User.logInfo = function (obj) {
    console.log(obj)
    console.log('Почта ', obj.email)
    console.log('Пароль ', obj.password)
}

User.logInfo(mango)

console.dir(User)

console.log(Math.round(5.1))
console.log(Math.PI)

