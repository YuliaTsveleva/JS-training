// Функции

// объявление (создание) функции
// function expression (функциональное выражение) - не может быть вызвана до инициализации
const myFunc = function (param1, param2) {
    // statements
    console.log(`Это функциональное выражение с параметрами ${param1} & ${param2}`);
    console.log(param1, param2);
}

myFuncDecl();

// function declaration - может быть вызвана до объявления 
function myFuncDecl(param) {
    console.log(`Это декларативное объявление`)
 }

// arrow function - стрелочная функция - не может быть вызвана до инициализации
const myArrowFunc = (param1) => {
   console.log(`Это стрелочная функция`);
}

// вызовы функций
myFunc(`Hello`,`Baby`);
myFuncDecl();
myArrowFunc();

// params & arguments
function toSayHello(userName = 'User') {
    // alert(`${userName}, рады Вас приветствовать`);
    console.log(`${userName}, рады Вас приветствовать`);
}

/* параметр - это абстратктное значение, 
 локальная переменная функции*/

// default params 

toSayHello(`Sandra`)
toSayHello();

function showInfo(userName, userAge) {
    console.log(`Hello, my name is ${userName}. I'm ${userAge} years old`)
}

showInfo();
showInfo('Yulya', 36);
// аргументы при вызове долждны соответствовать параметрам при объявления

// arguments and ... args
function getResult() {
    console.log(arguments);
    for (let elem of arguments) {
        console.log(elem);
    }
    // arguments.push(1); - не работает, так как это псевдо массив и у него нет push
// но можем преобразовать псевдомассив в полноценный массив
    const myArgs = Array.from(arguments);
    console.log(myArgs);
    myArgs.push(1);
    console.log(myArgs);

}
getResult(0, 1);
// вернет псевдомассив arguments
// псевдомассив arguments доступен внутри каждой функции, объявленной через function expression или function declaration

const getArrayRes = (...allParams) => {
    // console.log(argumets); - стрелочная функция не работает с псевдомассивом arguments
    console.log(allParams);
}
getArrayRes(1, 2, 3, 4);

// ... rest - собирает все аргументы в массив

// Guard Clause - это паттерн, который используется для того, чтобы делать быстрый возврат
// паттерн моментального выхода, если условие выполнилось и дальше нам ничего не нужно, можем сразу выйти

function getValue(array, value) {
    console.log(array);
    for (let i = 0; i < array.length; i += 1){
        console.log(`Итерация ${i+1}`)
        if (array[i] === value) return `Значение ${value} есть в массиве`;
    }
    return `Значение ${value} отсуствует`;
}
let result = getValue([1, 2, 3, 4, 5, 6, 7], 5);
console.log(result);
result = getValue([1, 2, 3, 4, 5, 6, 7], 8);
console.log(result);
result = getValue([1, 2, 3, 4, 5, 6, 7], 2);
console.log(result);
result = getValue([1, 2, 3, 4, 5, 6, 7], 15);
console.log(result);


function getSpam(text, words) {
    // console.log(text);
    // console.log(words);
    let i = 0;
    for (let word of words) {
        i+=1
        console.log(word, i);
        if(text.includes(word)) return `Spam!`
    }
    return text
}

const arr = ['consectetur','elit']
let value = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure porro quia doloribus ea est veniam voluptatem voluptatibus maxime quod.';
console.log(getSpam(value, arr));

// Arrow functions & return

// const getTotal = (a, b) => {
//     return a + b;
// };
 
// то же самое в короткой записи
const getTotal = (a, b) => a + b;
console.log(getTotal(2, 5));


const greet = (user) => `Hello ${user}`;
console.log(greet('World'));
