// Приведение к булю
// to boolean

// Строка к булю - любое строчное значение
let value = "Hello";
// 1 способ - с использованием конструктора boolean
let toBoolean = Boolean(value);
console.log(`${value}`, "через конструктор Boolean():", toBoolean);
console.log(`тип данных ${value}`, "через конструктор Boolean():", typeof toBoolean);
// 2 способ - двойное отрицание
toBoolean = !!value;
console.log(`${value}`, "через двойное отрицание:", toBoolean);
console.log(`тип данных ${value}`, "через двойное отрицание:", typeof toBoolean);

// Строчное число к булю - любое строчное число
value = "123";
// 1 способ - с использованием конструктора boolean
toBoolean = Boolean(value);
console.log(`${value}`, "через конструктор Boolean():", toBoolean);
console.log(`тип данных ${value}`, "через конструктор Boolean():", typeof toBoolean);
// 2 способ - двойное отрицание
toBoolean = !!value;
console.log(`${value}`, "через двойное отрицание:", toBoolean);
console.log(`тип данных ${value}`, "через двойное отрицание:", typeof toBoolean);

// Пустая строка к булю 
value = "";
// 1 способ - с использованием конструктора boolean
toBoolean = Boolean(value);
console.log(`${value}`, "пустая строка через конструктор Boolean():", toBoolean);
console.log(`тип данных ${value}`, "пустая строка через конструктор Boolean():", typeof toBoolean);
// 2 способ - двойное отрицание
toBoolean = !!value;
console.log(`${value}`, "пустая строка через двойное отрицание:", toBoolean);
console.log(`тип данных ${value}`, "пустая строка через двойное отрицание:", typeof toBoolean);

// Строка с пробелом к булю 
value = " ";
// 1 способ - с использованием конструктора boolean
toBoolean = Boolean(value);
console.log(`${value}`, "строка с пробелом через конструктор Boolean():", toBoolean);
console.log(`тип данных ${value}`, "строка с пробелом через конструктор Boolean():", typeof toBoolean);
// 2 способ - двойное отрицание
toBoolean = !!value;
console.log(`${value}`, "строка с пробелом через двойное отрицание:", toBoolean);
console.log(`тип данных ${value}`, "строка с пробелом через двойное отрицание:", typeof toBoolean);

// Число к булю - 0
value = 0;
// 1 способ - с использованием конструктора boolean
toBoolean = Boolean(value);
console.log(`${value}`, "через конструктор Boolean():", toBoolean);
console.log(`тип данных ${value}`, "через конструктор Boolean():", typeof toBoolean);
// 2 способ - двойное отрицание
toBoolean = !!value;
console.log(`${value}`, "через двойное отрицание:", toBoolean);
console.log(`тип данных ${value}`, "через двойное отрицание:", typeof toBoolean);

// Число к булю - любое число
value = 1;
// 1 способ - с использованием конструктора boolean
toBoolean = Boolean(value);
console.log(`${value}`, "через конструктор Boolean():", toBoolean);
console.log(`тип данных ${value}`, "через конструктор Boolean():", typeof toBoolean);
// 2 способ - двойное отрицание
toBoolean = !!value;
console.log(`${value}`, "через двойное отрицание:", toBoolean);
console.log(`тип данных ${value}`, "через двойное отрицание:", typeof toBoolean);

// Число к булю - NaN
value = NaN;
// 1 способ - с использованием конструктора boolean
toBoolean = Boolean(value);
console.log(`${value}`, "через конструктор Boolean():", toBoolean);
console.log(`тип данных ${value}`, "через конструктор Boolean():", typeof toBoolean);
// 2 способ - двойное отрицание
toBoolean = !!value;
console.log(`${value}`, "через двойное отрицание:", toBoolean);
console.log(`тип данных ${value}`, "через двойное отрицание:", typeof toBoolean);

// Число к булю - Infinity
value = Infinity;
// 1 способ - с использованием конструктора boolean
toBoolean = Boolean(value);
console.log(`${value}`, "через конструктор Boolean():", toBoolean);
console.log(`тип данных ${value}`, "через конструктор Boolean():", typeof toBoolean);
// 2 способ - двойное отрицание
toBoolean = !!value;
console.log(`${value}`, "через двойное отрицание:", toBoolean);
console.log(`тип данных ${value}`, "через двойное отрицание:", typeof toBoolean);


// Undefined к булю 
value = undefined;
// 1 способ - с использованием конструктора boolean
toBoolean = Boolean(value);
console.log(`${value}`, "через конструктор Boolean():", toBoolean);
console.log(`тип данных ${value}`, "через конструктор Boolean():", typeof toBoolean);
// 2 способ - двойное отрицание
toBoolean = !!value;
console.log(`${value}`, "через двойное отрицание:", toBoolean);
console.log(`тип данных ${value}`, "через двойное отрицание:", typeof toBoolean);

// Null к булю 
value = null;
// 1 способ - с использованием конструктора boolean
toBoolean = Boolean(value);
console.log(`${value}`, "через конструктор Boolean():", toBoolean);
console.log(`тип данных ${value}`, "через конструктор Boolean():", typeof toBoolean);
// 2 способ - двойное отрицание
toBoolean = !!value;
console.log(`${value}`, "через двойное отрицание:", toBoolean);
console.log(`тип данных ${value}`, "через двойное отрицание:", typeof toBoolean);

// 6 ложных значений, которые при преобразовании к булю, приводятся к false: 
// пустая строка
// числовой 0
// NaN
// undefined
// null
// false
