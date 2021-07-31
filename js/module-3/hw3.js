// 1

// 2

// 3

// 4

// 5

// 6

// 7

// 8

// 9
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
  
  
//   // Change code above this line
// };

// 10
// Перебери объект apartment используя цикл for...in 
// и запиши в массив keys все его ключи, 
// а в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment){
// keys.push(key)
// values.push(apartment[key])
// }



// 11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//    keys.push(key);  
//    values.push(apartment[key]); 
// }
//   // Change code above this line
// }


// 12
// Напиши функцию countProps(object), 
// которая считает и возвращает количество 
// собственных свойств объекта в параметре object.
// Используй переменную propCount для хранения 
// количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//            propCount += 1; 
//          }  
//      }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({}))
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))


// 13
// Перебери объект apartment используя метод 
// Object.keys() и цикл for...of.
// Запиши в переменную keys массив ключей собственных 
// свойств объекта apartment, и добавь в массив 
// values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys){
//   values.push(apartment[key])
// }

// console.log(values)

// 14
// Выполни рефакторинг функции countProps(object) 
// используя метод Object.keys() и, возможно, 
// цикл for...of

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//     const keys = Object.keys(object);
//     for (const key of keys) {
//         propCount += 1;
//      }
    
//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({}))
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// 15
// Запиши в переменную keys массив ключей собственных 
// свойств объекта apartment, а в переменную values 
// массив всех значений его свойств.
// Используй методы Object.keys() и Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// 16
// Напиши функцию countTotalSalary(salaries) которая 
// принимает объект зарплат, где имя свойства это 
// имя сотрудника, а значение свойства это зарплата.
// Функция должна рассчитать общую сумму зарплат 
// сотрудников и вернуть её.Используй переменную 
// totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const values = Object.values(salaries)
//     for (const value of values) {
//         totalSalary += value;
//     }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// 17
// Перебери массив объектов colors используя цикл for...of. 
// Добавь в массив hexColors значения свойств hex, 
// а в массив rgbColors значения свойств rgb из всех 
// объектов массива colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// 18
// Напиши функцию getProductPrice(productName) которая 
// принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name) 
// в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден, функция должна 
// возвращать null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     for (const product of products) {
//         // console.log(product.name)
//         if (productName === product.name) {
//             return product.price
//         }
//     }
//     return null
  
//   // Change code above this line
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Engine"));
// console.log(getProductPrice('Droid'));

// 19
// Напиши функцию getAllPropValues(propName) 
// которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства 
// с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, 
// функция должна вернуть пустой массив.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     const propArray = []
//     for (const product of products) {
//         const keys = Object.keys(product)
//         if (keys.includes(propName)) {
//     propArray.push(product[propName])
// }    
// }
//     return propArray
  
//   // Change code above this line
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// 20
// Напиши функцию calculateTotalPrice(productName) 
// которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) 
// товара с таким именем из массива products.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let totalPrice = 0
//     for (const product of products) {
//         if (productName === product.name) {
//             totalPrice = product.price * product.quantity;
//         }
        
//      }
// return totalPrice
//         // Пиши код выше этой строки
//     }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// 21

// 22

// 23

// 24
// Выполни рефакторинг цикла for...of так, 
// чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// 25

// 26

// 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


// 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);



// 29
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};


// 30
/*Напиши функцию makeTask(data) которая принимает один 
параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.

Функция должна составить и вернуть новый объект задачи, 
не изменяя напрямую параметр data. В новом объекте должно 
быть свойство completed, значение которого хранится 
в одноимённой локальной переменной.

В параметре data гарантированно будет только свойство text,
 а остальные два, category и priority, могут отсутствовать. 
 Тогда, в новом объекте задачи, в свойствах category 
 и priority должны быть значения по умолчанию, хранящиеся 
 в одноимённых локальных переменных.
*/

// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
//     // Change code below this line
    
//     const newObject = { category, priority, ...data, completed }
//     console.log(newObject)
//     return newObject

//   // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))


// 31
// Используя операцию rest дополни код функции add() так, 
// чтобы она принимала любое количество аргументов, 
// считала и возвращала их сумму.

// // Change code below this line
// function add(...args) {
//   // Change code above this line
//     let summ = 0;
//     for (const arg of args) {
//         summ += arg
//     };
//     return summ;
// }

// console.log(add(15, 27));


// 32
// Функция addOverNum() считает сумму всех аргументов. 
// Измени параметры и тело функции addOverNum() так, 
// чтобы она считала сумму только тех аргументов, 
// которые больше чем заданное число.
// Это число должно быть первым параметром функции.

// // Change code below this line
// function addOverNum(limit, ...args) {
//   let total = 0;

//     for (const arg of args) {
//         if (arg > limit) {
//             total += arg;
//         }
//   }

//   return total;
//   // Change code above this line
// }


// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)) 

// 33
/*Функция findMatches() принимает произвольное количество 
аргументов. Первым аргументом всегда будет массив чисел, 
а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый 
массив matches, в котором будут только те аргументы, 
начиная со второго, которые есть в массиве первого аргумента.

Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) 
должна вернуть массив [1, 2], потому что только 
они есть в массиве первого аргумента.*/

// // Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//     for (const arg of args) {
//         if (array.includes(arg)) {
//             matches.push(arg)
//         }
//      }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));  //[1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //[17, 89, 2]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)) //[]

// 34
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//   return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName){
//   return `Updating book ${oldName} to ${newName}`
//   },
//   // Change code above this line
// };


// 35
// Дополни метод updateBook(oldName, newName) так, 
// чтобы он изменял название книги с oldName 
// на newName в свойстве books.Используй indexOf() для того, 
// чтобы найти нужный элемент массива, и splice() для того 
// чтобы заменить этот элемент

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       this.books.splice(this.books.indexOf(oldName), 1, newName)
// 	    // Change code above this line
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf.books);
// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf.books);

/*
Тесты
Объявлена переменная bookShelf
Значение переменной bookShelf это объект
Значение свойства bookShelf.updateBook это метод объекта

После вызова метода bookShelf.updateBook("Haze", 
"Dungeon chronicles"), значение свойства books 
это массив ["The last kingdom", "Dungeon chronicles", 
"The guardian of dreams"]

После вызова метода bookShelf.updateBook("The last kingdom", 
"Dune"), значение свойства books это массив ["Dune", "Haze", 
"The guardian of dreams"]*/

// 36

// К нам обратилась владелица лавки зелий «У старой жабы» 
// и заказала программу для ведения инвентаря - добавления, 
// удаления, поиска и обновления зелий.
// Добавь объекту atTheOldToad свойство potions, 
// значением которого сделай пустой массив.

// const atTheOldToad = {
//   // Change code below this line
//     potions: [],
//   // Change code above this line
// };

// Значение свойства atTheOldToad.potions это массив []

// 37
// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code above this line
//   getPotions(){
//   return this.potions
//   }
// };


// 38
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     // Change code above this line
//   },
// };


// 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(potionName), 1)
//     // Change code above this line
//   },
// };


// atTheOldToad.removePotion("Dragon breath")
// console.log(atTheOldToad.potions)
/*После первого вызова метода 
atTheOldToad.removePotion("Dragon breath"), 
в свойстве potions будет массив ["Speed potion", Stone skin"]

После второго вызова метода 
atTheOldToad.removePotion("Speed potion"), 
в свойстве potions будет массив ["Stone skin"]*/

// 40
// Дополни метод updatePotionName(oldName, newName) так,
// чтобы он обновлял название зелья с oldName на newName, 
// в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//       console.log(this.potions.indexOf(oldName))
//  this.potions.splice(this.potions.indexOf(oldName), 1, newName)
//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions)

/*После первого вызова метода 
atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), 
в свойстве potions будет массив ["Speed potion", "Polymorth", 
"Stone skin"]
После второго вызова метода 
atTheOldToad.updatePotionName("Stone skin", "Invisibility"), 
в свойстве potions будет массив `["Speed potion", "Polymorth", 
"Invisibility"]``*/


// 41
/*Заказчица хочет чтобы каждое зелье было представлено 
не только именем, но и ценой, а в будущем может быть 
и другими характеристиками. Поэтому теперь в свойстве 
potions будет храниться массив объектов со следующими 
свойствами.

{
  name: "Dragon breath",
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, 
чтобы они работали не с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. 
Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion 
(уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья 
с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет 
свойство name объекта-зелья с названием oldName 
на newName в массиве potions.*/

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
  
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//     },
  
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//   },

//     removePotion(potionName) {
//         for (const potion of this.potions) {
//             if (potion.name === potionName) {
//             this.potions.splice(this.potions.indexOf(potion), 1); }
//     }
//     return `Potion ${potionName} is not in inventory!`;
      
//     },
     
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName
//              }
//          }       
//     },
  
 
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions())

// // atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// // atTheOldToad.removePotion("Stone skin")

// atTheOldToad.updatePotionName( "Stone skin","Polymorth")

// console.log(atTheOldToad.getPotions())
/*Тесты
Объявлена переменная atTheOldToad

Значение переменной atTheOldToad это объект

Значение свойства atTheOldToad.getPotions это метод объекта

Вызов метода atTheOldToad.getPotions() 
для исходного объекта возвращает [ { name: "Speed potion", 
price: 460 }, { name: "Dragon breath", price: 780 }, 
{ name: "Stone skin", price: 520 } ]

Значение свойства atTheOldToad.addPotion это метод объекта.

Для исходного объекта после вызова метода 
atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
 в массиве potions последним элементом будет этот объект

Для исходного объекта после вызова метода 
atTheOldToad.addPotion({ name: "Power potion", price: 270 }), 
в массиве potions последним элементом будет этот объект

Значение свойства atTheOldToad.removePotion это метод объекта

Для исходного объекта после вызова метода 
atTheOldToad.removePotion("Dragon breath"), 
в свойстве potions будет массив [ { name: "Speed potion", 
price: 460 }, { name: "Stone skin", price: 520 } ]

Для исходного объекта после вызова метода 
atTheOldToad.removePotion("Speed potion"), 
в свойстве potions будет массив [ { name: "Dragon breath", 
price: 780 }, { name: "Stone skin", price: 520 }]

Значение свойства atTheOldToad.updatePotionName это метод объекта

Для исходного объекта после вызова метода 
atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), 
в свойстве potions будет массив [{ name: "Speed potion", 
price: 460 }, { name: "Polymorth", price: 780 }, 
{ name: "Stone skin", price: 520 } ]

Для исходного объекта после вызова метода 
atTheOldToad.updatePotionName("Stone skin", 
"Invulnerability potion"), в свойстве potions будет массив 
[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", 
price: 780 }, { name: "Invulnerability potion", price: 520 } ]*/