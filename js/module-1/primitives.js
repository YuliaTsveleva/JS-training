console.log("primitives");

// 7 типов примитивных типов данных

let stringData = "string";
// Строчные данные
console.log(stringData);
// typeof - оператор определения типа данных
console.log(typeof stringData);

stringData = " ";
console.log(stringData);
console.log(typeof stringData);

let number = 1;
// тип данных - число
console.log(number);
console.log(typeof number);

number = 2e53;
console.log(number);
console.log(typeof number);

number = Infinity;
console.log(number);
console.log(typeof number);

number = NaN;
// Not a number - не число
console.log(number);
console.log(typeof number);

// Boolean true || false
let isOnline = true;
console.log(isOnline);
console.log(typeof isOnline);

isOnline = false;
console.log(isOnline);
console.log(typeof isOnline);

// Undefined - значение, которое получает переменная, 
// если мы ее обьявили, но не присвоили значение
let message
console.log(message);
console.log(typeof message);

// null - отсутствие объекта, ничто, при выводе 
// оператором typeof выдает тип данных "объект", 
// но он не объект, а примитив;
let user = null;
console.log(user);
console.log(typeof user);

