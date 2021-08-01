// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// function concat(arr1, arr2) {
//     return arr1.concat(arr2);
// }
 
// console.log(concat([1, 2, 3], [4, 5, 6]));

// function spread(arr1, arr2) {
    
//     return [...arr1, ...arr2];
// }
 
// console.log(spread([1, 2, 3], [4, 5, 6]));

// function cicle(arr1, arr2) {
//     const newArr = [];
//     for (const value of arr1) {
//         newArr.push(value)
//     }
//     for (const value of arr2) {
//         newArr.push(value)
//     }
//     return newArr
// }
 
// console.log(cicle([1, 2, 3], [4, 5, 6]));

// function cicle(...arrays) {
//     const newArr = [];
//     for (const array of arrays) {
//         for (const elem of array) {
//              newArr.push(elem)
//          }
//         }
//         return newArr
// }
 
// console.log(cicle([1, 2, 3], [4, 5, 6], [7, 8, 9]));

// 2
// Создайте функцию avg() , которая будет находить среднее значение
//  по всем своим аргументам (аргументы величины числовые).

// function avg(...numbers) {
//     let avg = 0
//     for (const number of numbers) {
//        avg += number/numbers.length
//     }
//     return avg
// };

// function avg(...numbers) {
//     let total = 0
//     let quantity =0 
//     for (let i = 0; i <= numbers.length - 1; i += 1){
//         if (typeof numbers[i] !== 'number') {
//             continue
//         }
//         quantity += 1;
//         total += numbers[i];
//     }
//     return total / quantity;
// };

// console.log(avg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '11'));

// 3
// Создайте функцию repeat(str, n), которая возвращает строку,
//  состоящую из n повторений строки str. n — по умолчанию 2, str — пустая строка

// function repeat(str='', n=2) {
//     let string = [];
//     for (let i = 0; i < n; i += 1) {
//                   string.push(str);
//      }
//   return string.join('')
//  }


// function repeat(str = '', n = 2) {
//     let i = 0;
//     let string = [];
//     while (i < n) {
//         i += 1;
//         string.push(str);
//     }
//   return string.join('')
//  }

// console.log(repeat('hello', 3))  /// hello hello hello


// 4
// Напишите функцию, которая возвращает новый объект без указанных значений.
// ({ a: 1, b: 2 }, 'b') => { a: 1 }

// function deleteKey(obj, key) {
//     const newObj = {};
//     Object.assign(newObj, obj)
//     delete newObj[key]
//     return newObj
//  }

// function deleteKey(obj, key) {
//     const copy = {...obj}; //обратить внимание, что делается неглубокая копия
//     delete copy[key]
//     return copy
//  }

// const example = { a: 3, b: 5, c: 9 }
// console.log(deleteKey({ a: 1, b: 2 }, 'b'))
// console.log(deleteKey(example, 'b'))
// console.log(example)


// const copy1 =  JSON.parse(JSON.stringify(human)) - синтаксис глубокой копии

// 5
// Напишите функцию isEmpty(obj), которая возвращает true,
//  если у объекта нет свойств, иначе false.

// function isEmpty(obj) {
//         if (Object.keys(obj).length >0) {
//         return false
//     } return true
// }
 
// function isEmpty(obj) {
//         if (Object.keys(obj).length) {
//         return false
//     } return true
// }

// function isEmpty(obj) {
//     return Object.keys(obj).length ? false : true;
// }

// function isEmpty(obj) {
//     return !Object.keys(obj).length   //инверсия, приведение к булю
// }


const example1 = { a: 3, b: 5 }

// console.log(isEmpty(example1))
// console.log(isEmpty({}))

// 6
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
//  Функция возвращает число - количество свойств.

// function countProps(obj) {
//     let countKeys = 0
//     const keys = Object.keys(obj)
//     for (const key of keys) {
//         countKeys +=1
//     }
//     return countKeys
// }
 
// function countProps(obj) {
//   return Object.keys(obj).length
//  }

// console.log(countProps({ a: 1, b: 2, c: 3 }))
// console.log(countProps(example1))

// 7
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат 
// в переменной sum.
// Если объект salaries пуст, то результат должен быть 0.

// function getTotalSalaries(obj) {
//     const values = Object.values(obj);
//     let sum = 0;
//     for (const value of values) {
//         sum += value;
//     }
//     return sum;
// }
 
function getTotalSalaries(obj) {
    let sum = 0;
    for (const value of Object.values(obj)) {
        sum += value;
    }
    return sum;
}

console.log(getTotalSalaries(salaries))