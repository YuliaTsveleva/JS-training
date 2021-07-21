// логические операторы
// логическое И - &&
console.log("I lovе JavaScript" && 1);
//                        true && true
console.log("JavaScript" && 1 && true);
//                 true && true && true
// Логическое И вернет последнее значение true, если все true
console.log(0 && "JS" && 1);
//       false && true && true
console.log(0 && false && "JS" && 1);
//       false && false && true && true
// Логическое И используется, например, когда нужно проверить четкое попадание в диапазон
// Example
let minPrice = 100;
let maxPrice = 200;
let currentPrice = 150;

console.log(currentPrice >= minPrice && currentPrice <= maxPrice)

if (currentPrice >= minPrice && currentPrice <= maxPrice) {
    console.log(`Покупка возможна`)
}
else {console.log(`Цена не соответствует заданному диапазону`) }
// && делает строгую проверк уна соблюдение всех условий, т.е. проверяет оба условия и если оба выполнены, то разрешает выполнить инструкцию


// логическое ИЛИ ||
console.log("true" || true);
//          true || true - возвращает первое true
console.log("true" || false);
//          true || false - возвращает первое true
console.log(false || 0 || NaN);
//          false || false || false - возвращает последнее false

// example
currentPrice = 180;

console.log(currentPrice >= minPrice || currentPrice <= maxPrice)

if (currentPrice >= minPrice || currentPrice <= maxPrice) {
    console.log(`Покупка возможна`)
}
else {console.log(`Цена не соответствует заданному диапазону`) }
// || проверяет оба условия и если хоть одно выполнено, то разрешает выполнить инструкцию

// example
let day = "sun";
if (day === "mon" ||
    day === "tue" ||
    day === "wen" ||
    day === "thu" ||
    day === "fri") {
    console.log(`${day} - будний день`);
}
else {console.log(`${day} - выходной день`) }

// логическое НЕ !
console.log(!true);
console.log(!0);
console.log(!"text");
console.log(!NaN);

// example
let enterPrompt = null;

if (!enterPrompt) {
    console.log("Пользователь нажал отмена");
}

// Двойное отрицание !!
console.log(1);
console.log(!1);
console.log(!!1);
console.log(0);
console.log(!0);
console.log(!!0);

