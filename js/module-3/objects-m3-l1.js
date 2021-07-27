console.log({});
const obj = {
    // props (key: value;)
    prop_a: 'A',
    prop_b: 'B',
    prop_c: 2,
    prop_d: null,
    prop_e: true,
    name: 'Sandra',
    age: 31,
    isOnline: false,
    isStudent: true,
    skills: ['HTML', 'CSS'],
    music: {
        bands: ['bi-2'],
        songs: ['fjhsdf'],
    },
// methods
// ES5
    showName1: function () {
        console.log('Hello');
    },
// ES6
    showName2()
    {
        console.log('World');
    },
}

console.log(obj);

// объект - это список значений (но не индексированных)
// GET или READ

// console.log('name: ', obj.name);
// console.log('name: ', obj.age);

// console.log('name: ', obj['name']);
// console.log('name: ', obj['age']);

// obj.showName1();
// obj.showName2();

// изменение значение свойства в объекте UPDATE
// console.log(obj.age);
obj.age = 18;
// console.log(obj.age);

// если такого свойства пока еще нет - undefined
// console.log(obj.languages);

// добавляем это свойство в объект CREATE
obj.languages = ['english', 'russian', 'ukranian']
// console.log(obj.languages);

// удаление свойства объекта через DELETE - практически не используется
delete obj.age;
// console.log(obj.age);

// short prop
let age = 30;
// console.log(age);

let skills = ['HTML', 'CSS']

const myUser = {
    age,
    skills,
}

// console.log(myUser);

// вычисляемые свойства
let key1 = 'userName';
let key2 = 'lastName';
let key3 = 'skills';
const nextUser = {
    [key1]: 'user',
    [key2]: 'surname',
    [key3]: ['HTML', 'CSS'],
}

// console.log(nextUser);

const object = {};

for (const prop in object) {
    console.log('key: '.key);
}

const product = {
    price: 10,
}
console.log(product);

const newProduct = Object.create(product);
console.log(newProduct);
newProduct.title = 'product';

for (let key in newProduct) {
  
    if (newProduct.hasOwnProperty(key)) {
    console.log(key);
    console.log(newProduct[key]);}
}

newProduct.price = 100;
   
const newNewProduct = Object.create(newProduct);
console.log(newNewProduct);

// obj.hasOwnProperty()
console.log(newNewProduct.hasOwnProperty('price'));
console.log(newProduct.hasOwnProperty('price'));
console.log(product.hasOwnProperty('price'));

// Object.keys(obj) - Массив ключей
// Object.values(obj) - массив всех значений
// Object.entries(obj) - многомерный массив, 
// состоящий из массивов[key, value]

const myKeys = Object.keys(obj);
console.log(myKeys);
console.log(myKeys[0]);  //key at index 0

console.log(obj[myKeys[0]]);
//то же, что и obj['prop_a]

const myValues = Object.values(obj);
console.log(myValues);
console.log(myValues[0]);  //value at index 0

const prod = {
    count: 2,
    price: 10,
}

const vals = Object.values(prod);
console.log(vals);

const totalPrice = vals[0] * vals[1];
console.log(totalPrice);

const myEntries = Object.entries(prod);
console.log(myEntries);

// контекст исполнения
// this
// используется когда внутри метода объекта 
// нужно обратиться к свойству этого же объекта

let nickName = 'Bla Bla';

const user = {
    nickName: 'User',
    showNickName() {
        return `Hello, ${this.nickName}`;
     }
}

console.log(user.showNickName());

