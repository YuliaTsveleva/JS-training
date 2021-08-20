class Class {
    // тут создаем свойство
    constructor(prop1 = 0, prop2 = 1) {
        this.prop1 = prop1
        this.prop2 = prop2
    }
    // тут добавляем методы
    // ES6 
    method1() {
        console.log(this.prop1)
            }
    method2(value) {
            return (this.prop2=value)
        }
}

// examples
// исходный класс
class User {
    constructor(login, password) {
        this.login = login
        this.password = password
    }
    showLogin() {
        console.log(login)
    }
}

// экземпляр исходного класса
const user1 = new User('user1', 'qweqwe')
console.log(user1)

// новый (наследуемый) класс на базе исходного
class NewUser extends User{
    constructor(name, age, login, password) {
        // инициализиоуем исходный класс
        super(login, password);
        this.name = name;
        this.age = age;
    };
updateAge() {
        return (this.age += 1)
    };
}

// экземпляр нового класса
const newUser1 = new NewUser('Anatoliy', 18, 'Tolik', 'qwerty')
console.log(newUser1)


// ??????


// свойства-акссессоры getter & setter

class BaseProduct {
    constructor(title, price) {
        this.title = title
        this._price = price
    }
    // get & set
    get price() {
        return this._price;
    }
    set price(value) {
         return this._price = value
    }

    get title() {
    return this._title
    }
    set title(value) {
    return(this._title = value) 
}

}

const baseProduct = new BaseProduct('banana', 25)
console.log(baseProduct)

console.log('свойство _price', baseProduct._price)
console.log('by getter price', baseProduct.price)
baseProduct.price = 35;  //это вызов сеттера
console.log('by getter price', baseProduct.price)

console.log('свойство _title', baseProduct._title)  //плохо
console.log('by getter title', baseProduct.title)  //хорошо

baseProduct.title = 'Orange'  //это вызов сеттера
console.log('by getter title', baseProduct.title)

// Статические свойства и методы
// Static props & methods

class Comment {
    static name = 'Anonim'
    static showName() {
        console.log(this.name)
    }

    constructor(author, text) {
        this.author = author
        this.text = text
}
}

const comment1 = new Comment('Pushkin', 'Lorem ipsun dolor')
console.log(comment1)

console.log(comment1.author)
console.log(comment1.text)
console.log(comment1.name)  //undefined

// Comment1.showName()    //error

console.log(Comment.name)
Comment.showName()

// task
// наследование классов ES6
class NewBaseProduct {
    constructor(name, price, category) {
        this.name = name
        this.price = price
        this.category = category
    }
    get price() {
    return this._price
}
    set price(value) {
    return (this._price = value)
}
}

class WeightProduct extends NewBaseProduct{
    constructor(weight, name, price, category) {
        super(name, price, category)
        this.weight = weight
    }
    getTotalCost(price, weight) {
  
        console.log(this.weight*this._price)
    }
    decrWeight(value) {
        if (this.weight - value <= 0) {
            console.log('Товара недостаточно')
        } else {
            return this.weight -=value
        }
    }
    incrWeight(value) {
       
        return (this.weight += value)
    }
}

const weightProduct = new WeightProduct(2.5, 'Lemon', 30, 'fruits')

console.log(weightProduct)

weightProduct.getTotalCost()

weightProduct.decrWeight(3)
weightProduct.incrWeight(5)
weightProduct.incrWeight(5)

// запуталась, проверить


class CountProduct extends NewBaseProduct{
    constructor(count, name, price, category) {
        super(name, price, category)
        this.count=count
    }
    getTotalCost() {
        console.log(this.count*this.price)
    }
    decrCount(value) {
        if (this.count - value < 0) {
            console.log('товара недостаточно')
        } else {
            return this.count -= value
        }
    }
    incrCount(value) {
       return this.count += value  
    }
}

const countProduct = new CountProduct(100, 'snickers', 25, 'sweets')
console.log(countProduct)
console.log('остаток', countProduct.decrCount(10))
console.log('остаток', countProduct.incrCount(5))
console.log('остаток', countProduct.incrCount(33))
console.log('остаток', countProduct.decrCount(1))
console.log('остаток', countProduct.decrCount(127))