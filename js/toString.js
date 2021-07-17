// Приведение к строке
// 2 способа - конструктор String и конкатенация

// Число к строке
let value = 0;
// 1 способ - с использованием конструктора string
let toString = String(value);
console.log(`${value}`, "значение через конструктор String():", toString);
console.log(`тип данных ${value}`, "через конструктор String():", typeof toString);
// 2 способ - конкатенация
toString = value + "";
console.log(`${value}`, "значение через конкатенацию:", toString);
console.log(`тип данных ${value}`, "через конкатенацию:", typeof toString);

value = 1;
// конструктор String
toString = String(value);
console.log(`${value}`, "значение через конструктор String():", toString);
console.log(`тип данных ${value}`, "через конструктор String():", typeof toString);
// Конкатенация
toString = value + "";
console.log(`${value}`, "значение через конкатенацию:", toString);
console.log(`тип данных ${value}`, "через конкатенацию:", typeof toString);

// Бесконечность к строке
value = Infinity;
// конструктор String
toString = String(value);
console.log(`${value}`, "значение через конструктор String():", toString);
console.log(`тип данных ${value}`, "через конструктор String():", typeof toString);
// Конкатенация
toString = value + "";
console.log(`${value}`, "значение через конкатенацию:", toString);
console.log(`тип данных ${value}`, "через конкатенацию:", typeof toString);

// NaN к строке
value = NaN;
// конструктор String
toString = String(value);
console.log(`${value}`, "значение через конструктор String():", toString);
console.log(`тип данных ${value}`, "через конструктор String():", typeof toString);
// Конкатенация
toString = value + "";
console.log(`${value}`, "значение через конкатенацию:", toString);
console.log(`тип данных ${value}`, "через конкатенацию:", typeof toString);

// Boolean (булевое или логическое) значение к строке
value = true;
// конструктор String
toString = String(value);
console.log(`${value}`, "значение через конструктор String():", toString);
console.log(`тип данных ${value}`, "через конструктор String():", typeof toString);
// Конкатенация
toString = value + "";
console.log(`${value}`, "значение через конкатенацию:", toString);
console.log(`тип данных ${value}`, "через конкатенацию:", typeof toString);

value = false;
// конструктор String
toString = String(value);
console.log(`${value}`, "значение через конструктор String():", toString);
console.log(`тип данных ${value}`, "через конструктор String():", typeof toString);
// Конкатенация
toString = value + "";
console.log(`${value}`, "значение через конкатенацию:", toString);
console.log(`тип данных ${value}`, "через конкатенацию:", typeof toString);

//Undefined к строке
value = undefined;
// конструктор String
toString = String(value);
console.log(`${value}`, "значение через конструктор String():", toString);
console.log(`тип данных ${value}`, "через конструктор String():", typeof toString);
// Конкатенация
toString = value + "";
console.log(`${value}`, "значение через конкатенацию:", toString);
console.log(`тип данных ${value}`, "через конкатенацию:", typeof toString);

// Null к строке
value = null;
// конструктор String
toString = String(value);
console.log(`${value}`, "значение через конструктор String():", toString);
console.log(`тип данных ${value}`, "через конструктор String():", typeof toString);
// Конкатенация
toString = value + "";
console.log(`${value}`, "значение через конкатенацию:", toString);
console.log(`тип данных ${value}`, "через конкатенацию:", typeof toString);