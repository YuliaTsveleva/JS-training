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

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки



  // Пиши код выше этой строки
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Scanner"));





// 21

// 22

// 23

// 24

// 25

// 26

// 27

// 28

// 29

// 30

// 31

// 32

// 33

// 34

// 35

// 36

// 37

// 38

// 39

// 40

// 41

// 42