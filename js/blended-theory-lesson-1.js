// Не примитив:
// объекты
const person = {
    name: "Roman",
    age: 25
}
// объекты хранят свойства, каждое свойство - ключ и значение

// символ

// bigInt - еще один числовой тип данных - для работы с большими числами, в конце добавляется буква 'n'
const bigInt = 152487854854n;
console.log(typeof bigInt);

// Взаимодействие с пользователем
// alert('My message');
// const result = confirm('Вы человек?');
// alert(result);
// confirm возвращает true (ок) или false (отмена)

// const result = prompt('Введите данные');
// alert(result);

// Операторы
let a = 10;
let b = 8;

const с = a + b + 55;
console.log(с);

let h = a >= b;
console.log(h);

// строгое и нестрогое равенство
// const d = a = b;
// console.log(d);
// переприсвоение

// строгое равенство
const g = a === b;
console.log(g);

// строгое неравенство
const f = a !== b;
console.log(f);

a = 10
b = '9'
const res = a + b;
console.log(res);
// если что-то складывается со строкой, то все приведется к строке, в данном случае результат будет 109

a = 10;
b = true;
const res2 = a + b;
console.log(res2);
// true приведется к единице и результат будет 11

// шаблонные строки
a = 'Hello';
b = 'Friend';
const res3 = `${a}, my ${b}`;
console.log(res3);

// индекс - исчисление с 0
console.log(a[0]);

/* ветвление - используется когда выволнение кода зависит 
// от определенных условий */

const condition = false;
if (condition === true) {
    console.log('Condition is equal true');
} else {
    console.log('Condition is falsy');
}

// тернарный оператор
condition === true ? console.log('Condition is equal true') : console.log('Condition is falsy');

// области видимости
const condition1 = true;
console.log(condition1);
