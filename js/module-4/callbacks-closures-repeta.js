// callback - функция обратного вызова
// может принимать другие функции как параметры
// функция, которая передается другой функции как аргумент
// называется функцией обратного (отложенного) вызова
// (Callback-функция)
// функция, котрая принимает жругую функцию как параметр или
// возвращает функцию как результат своей работы называется
// функцией высшего порядка

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);  //записалась ссылка на fnB
//     callback(100);          //произошел вызов fnB
// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// }

// fnA('qweqwe', fnB);


// const doMath = function (a, b, callback) {
//     const result = callback(a, b);     //вызов callback
//     console.log(result);
// };

// const add = function (x, y) {
//     return x + y;
// };
 
// const sub = function (x, y) {
//     return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);

// doMath(2, 3, function (x, y) {                  //запись той же функции сразу в аргументе
//     return x + y;                               //не вызов, а тело, объявление функции
// });                                             //инлайн-функция
//                                                 //анонимная, без имени
// doMath(10, 8, function (x, y) {
//     return x - y;
// });

// examples

// отложенный вызов: регистрация события
// завернуть в функцию событие, которое произойдет когда-нибкдь и зарегить его как callback


// const buttonRef = document.querySelector('.js-button');

// const handleButtonClick = function () {
//     console.log('Клик по кнопке');
// };

// buttonRef.addEventListener('click', handleButtonClick);

// function addEventListener(eventType, callback) {
//     // если 
//     if (eventType === event) {
//         callback();
//      }
// }

// // можно инлайн:
// buttonRef.addEventListener('click', function () {
//     console.log('Клик по кнопке');
// });

// // пример - получение геопозиции пользователя
// const onGetPositionSuccess = function (position) {
//     console.log('Это вызов onGetPositionSuccess');
//     console.log(position);
// };

// const onGetPositionError = function (error) {
//     console.log('Это вызов onGetPositionError');
//     console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError
// );

// отложенный вызов: интервалы
// const callback = function () {
//     console.log('Через 3 сек внутри колбэка в таймауте')
// }

// console.log('В коде перед таймаутом');

// setTimeout(callback, 2000)

// console.log('В коде после таймаута');

// отложенный вызов: http-запрос

// фильтр

// const filter = function (array, test) {
//     const filteredArray = [];
//     for (const el of array) {
//         // console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         };
//     }
//     return filteredArray;
// }

// // 1 надо передать функцию
// // 2 функция получает элемент массива
// // 3 если элемент массива удовлетворяет условию, то функция вернет true
// // 4 иначе вернет false

// const callback1 = function (value) {
//     return value >= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//     return value <= 4;
// })
// console.log(r2);    

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true }
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity>=120
// }

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

// Closures - замыкания
// возвращаемая функция во время вызова будет иметь доступ ко всем 
// локальным переменным (области видимости) родительской функции
// (той, из котрой ее вернули), это называется замыкание

const fnA = function (parameter) {
    const innerVariable = 'Значение внутренней переменной функции fnA';

    const innerFunction = function () {
        console.log(innerVariable)
        console.log(`Это вызов innerFunction`);
    };
    return innerFunction;
};

const fnB = fnA(555);
fnB();    //есть доступ к переменной innerVariable
console.log(fnB);


// const makeDish = function (shefName, dish) {
//     console.log(`${shefName} готовит ${dish}`)
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'кофе');

// const makeShef = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`)
//     }
//     return makeDish
// };

// const mango = makeShef('Mango');
// // console.log(mango)

// console.dir(mango)

// mango('котлеты');
// mango('пирожок');

// const poly = makeShef('Poly');
// // console.log(poly)

// console.dir(poly)

// poly('чай');
// poly('омлет');

// пример - округление
const floatingPoint = 3.457458;
const someInt = Math.round(floatingPoint);  //3
const withDecimals = Number(floatingPoint.toFixed(2));  //3.45

const number1 = 3.6654;
const number2 = 4.5488;

// console.log(Number(number1.toFixed(3)));
// console.log(Number(number2.toFixed(4)));

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.254785, 2));
// console.log(rounder(3.254785, 3));
// console.log(rounder(5.25223658, 2));
// console.log(rounder(5.23223658, 3));

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    }
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.254785));
console.log(rounder3(3.254785));
console.log(rounder2(5.25223658));
console.log(rounder3(5.23223658));

// приватные данные
const myLibFactory = function () {
    let value = 0;

    const add = function (num) {
        value += num;
    };

    return {
        add,
        getValue() {
            return value
        },
    };
};

const myLib = myLibFactory();

console.dir(myLib.getValue);

console.log(myLib);
console.log(myLib.getValue());
myLib.add(10);
console.log(myLib.getValue());


const salaryManagerFactory = function (employeeName, baseSalary) {
    let salary = baseSalary;

    return {
        raise(amount) {
            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },

        current() {
            return `Текущая з/п ${employeeName} - ${salary}`
        },
    };
};


const salaryManager = salaryManagerFactory('Mango', 5000);
console.log(salaryManager);
console.dir(salaryManager.salary);   //приватное значение, undefined

console.log(salaryManager.current());
console.dir(salaryManager.current);






