// 1
// callbacks
// написать метод every, который принимает массив и функцию callback 
// (в которой бум делать различные проверки). Это метод возвращает true,
// если каждый елемент массива прошел проверку в callback. Если хотя бы один 
// элемент не прошел проверку, то возвращает false. callback принимает элемент массива ...

// function every(array, callback) {
//     const results = [];
//     for (let elem of array) {
//         let condition = callback(elem)
//         // console.log(condition)
//         results.push(condition)
//     }
//     console.log(results)
//     return (results.includes(false)) ? false : true;
// }

// let result = every([1, 11, 111, 2, 22, 222], getLessThenTen)
// console.log(result)

// result = every([1, 2, 3, 4, 5, 6, 7, 8, 9], getLessThenTen);
// console.log(result)

// function getLessThenTen(number) {
//         // if (number < 10) {
//         //     return true
//         // } else {
//         //     return false
//         //  }
//     return number < 10 ? true : false;
// };


// function getMoreThenTen(number) {
//     return number > 10 ? true : false;
// };

// result = every([1, 11, 111, 2, 22, 222], getMoreThenTen);
// console.log(result);

// result = every([11, 111, 20, 22, 222], getMoreThenTen);
// console.log(result);


// создать метод, который принимает массив и возвращает новый, 
// который принимает любые значения и возвращает новый, где отсутствуют любые
// значения, которые при приведении к булю дают false

// function compact(array, callback) {
//     const newArray = [];
//     for (let value of array) {
//         console.log(Boolean(value));
//         // if (Boolean(value)) newArray.push(value); //паттерн guardClause - быстрый возврат
//         callback(value, newArray)
//     }

//     return newArray;
// };

// function getFalsyValues(element, falsyValues) {
//     if (!Boolean(element)) falsyValues.push(element);
// };
 
// function getNotFalsyValues(element, notFalsyValues) {
//  if (Boolean(element)) notFalsyValues.push(element);
// };

// // console.log(compact([1, 0, '', null, 'Hello']));
// // console.log(compact([Infinity, " ", {}, []]));

// console.log(compact([1, 0, '', null, 'Hello'], getFalsyValues));

// console.log(compact([Infinity, " ", {}, []], getNotFalsyValues));

// 4
// написать функцию, котооая принимает массив и выводит
// на экран информацию про доставку товаров всех типов
const ordersA = [
    { name: 'a', deliveryProgress: 50 },
    { name: 'b', deliveryProgress: 100 },
    { name: 'c', deliveryProgress: null },
     { name: 'c', deliveryProgress: 0},
];

function showDeliveryStatus(array) {
    // let progress;
    let message;
    const results = []
    for (let order of array) {
     
        let { deliveryProgress: progress } = order;
        progress = order.deliveryProgress;
   

        if (progress === 100) {
            message = 'Done';
                 results.push(message)
        } else if (progress < 100 && progress >=1) {
            message = 'In progress';
                 results.push(message)
        } else if (progress === null) {
            message = 'ready for delivery';
                 results.push(message)
        } else {
            message = 'Not ordered';
             results.push(message)
         }
     
 };
        return results.join(', ');
}

console.log(showDeliveryStatus(ordersA))