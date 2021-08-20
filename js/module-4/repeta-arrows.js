/*Стрелочные функции
явный и неявный возврат
аргументы
неявный возврат объекта*/


const add = function (a, b, c) {
     console.log(arguments);
    console.log(a, b, c);
    return a + b + c;
};

const addArrow = (a, b, c) => {
    //если параметров 2 и больше, 
    // скобки обязательны, если параметр 1 скобки можно пропустить,
    // если параметров нет - обязательны пустые скобки
   
    console.log(a, b, c);
    return a + b + c;
    // если в теле стрелочной функции больше одной строки, 
    // то { } - явный возврат
    // если в теле этой функции одна строка (сразу return),
    // то можно записать:
    // const addArrow = (a, b, c) => a + b + c; - неявный возврат
};

const addArrowShort = (a, b, c) => a + b + c;

console.log(add(5, 10, 15));
console.log(addArrow(5, 10, 15));
console.log(addArrowShort(5, 10, 15));

// аргументы - у стрелочной функции нет псевдомассива arguments,
// но их можно собрать операцией rest

const args = (...args) => { console.log(args) };

console.log(args(5, 10, 15));


const fnA = function () {
    return {
        a: 5,
    };
};

// перепишем на стрелочную

const arrowFnA = () => ({arrowA: 5,});  //объект нужно обернуть в ()

console.log(arrowFnA())

// example
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

// переписываем в стрелку

const onGetPositionSuccess = (position) => {
    console.log('Это вызов onGetPositionSuccess');
    console.log(position);
};

const onGetPositionError = (error) => {
    console.log('Это вызов onGetPositionError');
    console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError
);


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

// переписываем в стрелку


const filter = (array, test) => {
    const filteredArray = [];
    for (const el of array) {
        // console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        };
    }
    return filteredArray;
}

const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4)
console.log(r2);    

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true }
];

const r3 = filter(fruits, fruit => fruit.quantity>=120);
console.log(r3);