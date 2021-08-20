// callback
// const sum = (a, b) => a + b;

// const multiply = (a, b) => a * b;

// const makeAction = (action, param1, param2) => {
// return action(param1, param2)
// }

// console.log(makeAction(sum, 10, 9));
// console.log(makeAction(multiply, 10, 9));

// // функции-конструкторы
// function Person(name, age, food) {
//     // создается this
//     this.name = name;
//     this.age = age;
//     this.food - food;
//     // возвращается this
// }
 
// const person1 = new Person('Vova', 7, 'sweets');

// console.log(person1);

// классы
// class Person {

//     static sayBye() {
//         console.log(`Bye!`)
//      }

//     constructor(name, age, food) {
//         this.name = name;
//         this.age = age;
//         this.food = food;
//     }
    
//     sayHello() {
//         console.log(`Hello, friend! my name is ${this.name}`)
//      }
// }
 
// const person1 = new Person('Vova', 7, 'sweets');
// person1.sayHello();
// // person1.sayBye();
// console.log(person1);

// Person.sayBye();

// console.log(new Date);
// console.log(Date.now());

// функциональные методы массива
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach - перебирает, ничего не создает, не возвращает
// arr.forEach((elem) => console.log(elem));

// arr.forEach((elem, index, array) => {
//     // if (elem !== 6) { console.log(elem) };
//     console.log(`elem- ${elem} --- index- ${index}`);
//     // console.log(array)
// });

// Map - изменить старый массив и получить новый (одинаковой длины с входящим)
// const newArr = arr.map((elem) => {
//     return elem * 3;
// });

// console.log(newArr);

// Find - найдет первое совпадение или undefined
// const elem = arr.find((elem) => elem > 5);
// console.log(elem);

const arr = [1, 2, 5, 57, 5, 88, 7, 11, 9];
console.log(arr)
// Filter - вернет массив со всеми совпадающими элементами или пустой массив
// const newArr = arr.filter((elem) => elem > 10).map((elem) => elem/3)
// console.log(newArr);

// Sort - сортирует текущий массив

arr.sort((a, b) => a - b);
console.log(arr)

// Some
// const isExist = arr.some((elem) => elem > 50)
// console.log(isExist)

// Every
// const isExist = arr.every((elem) => elem > 50)
// console.log(isExist)

// Reduce - чтобы подсчитать аккумулирубщее значение
// const acc = arr.reduce((accum, elem) => accum + elem, 0)
// console.log(acc)

// includes
const result = arr.includes(3)
console.log(result)






