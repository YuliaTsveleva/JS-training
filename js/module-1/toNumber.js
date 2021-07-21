// Приведение к числу
// toNumber

// Строка к числу - любое строчное значение
let value = "Hello";
// 1 способ - с использованием конструктора number
let toNumber = Number(value);
console.log(`${value}`, "через конструктор Number():", toNumber);
console.log(`тип данных ${value}`, "через конструктор Number():", typeof toNumber);
// 2 способ - унарный +
toNumber = +value;
console.log(`${value}`, "через унарный +:", toNumber);
console.log(`тип данных ${value}`, "через унарный +:", typeof toNumber);


// Строка к числу - строчное число
value = "123";
// 1 способ - с использованием конструктора number
toNumber = Number(value);
console.log(`${value}`, "через конструктор Number():", toNumber);
console.log(`тип данных ${value}`, "через конструктор Number():", typeof toNumber);
// 2 способ - унарный +
toNumber = +value;
console.log(`${value}`, "через унарный +:", toNumber);
console.log(`тип данных ${value}`, "через унарный +:", typeof toNumber);

// Строка к числу - пустая строка
value = "";
// 1 способ - с использованием конструктора number
toNumber = Number(value);
console.log(`${value}`, "через конструктор Number():", toNumber);
console.log(`тип данных пустая строка ${value}`, "через конструктор Number():", typeof toNumber);
// 2 способ - унарный +
toNumber = +value;
console.log(`${value}`, "через унарный +:", toNumber);
console.log(`тип данных пустая строка ${value}`, "через унарный +:", typeof toNumber);

// Строка к числу - строка с пробелом
value = " ";
// 1 способ - с использованием конструктора number
toNumber = Number(value);
console.log(`${value}`, "через конструктор Number():", toNumber);
console.log(`тип данных строка с пробелом ${value}`, "через конструктор Number():", typeof toNumber);
// 2 способ - унарный +
toNumber = +value;
console.log(`${value}`, "через унарный +:", toNumber);
console.log(`тип данных строка с пробелом ${value}`, "через унарный +:", typeof toNumber);

// Boolean (булевое или логическое) значение к числу
value = true;
// конструктор Number
toNumber = Number(value);
console.log(`${value}`, "значение через конструктор Number():", toNumber);
console.log(`тип данных ${value}`, "через конструктор Number():", typeof toNumber);
// Унарный +
toNumber = +value;
console.log(`${value}`, "значение через унарный +:", toNumber);
console.log(`тип данных ${value}`, "через унарный +:", typeof toNumber);

value = false;
// конструктор Number
toNumber = Number(value);
console.log(`${value}`, "значение через конструктор Number():", toNumber);
console.log(`тип данных ${value}`, "через конструктор Number():", typeof toNumber);
// Унарный +
toNumber = +value;
console.log(`${value}`, "значение через унарный +:", toNumber);
console.log(`тип данных ${value}`, "через унарный +:", typeof toNumber);

//Undefined к числу
value = undefined;
// конструктор Number
toNumber = Number(value);
console.log(`${value}`, "значение через конструктор Number():", toNumber);
console.log(`тип данных ${value}`, "через конструктор Number():", typeof toNumber);
// Унарный +
toNumber = +value;
console.log(`${value}`, "значение через унарный +:", toNumber);
console.log(`тип данных ${value}`, "через унарный +:", typeof toNumber);

// Null к числу
value = null;
// конструктор Number
toNumber = Number(value);
console.log(`${value}`, "значение через конструктор NUmber():", toNumber);
console.log(`тип данных ${value}`, "через конструктор Number():", typeof toNUmber);
// унарный +
toNumber = +value;
console.log(`${value}`, "значение через унарный+:", toNumber);
console.log(`тип данных ${value}`, "через унарный +:", typeof toNumber);