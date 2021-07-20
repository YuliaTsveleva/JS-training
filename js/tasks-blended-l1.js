// Если переменная a равна 10, то выведите 'Верно', 
// иначе выведите 'Неверно'.
// const a = prompt("Введите значение a");
// console.log(a);
// console.log(typeof a);

// if (+a === 10) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// Переменная num может принимать 4 значения: 
// 1, 2, 3 или 4. Если она имеет значение '1',
//     то в переменную result запишем 'зима', если имеет значение
// '2' – 'весна' и так далее.Решите задачу через switch-case.


// const num = prompt('Введите значение');

// switch (num) {
//     case '1':
//         console.log('Зима')
//         break
//     case '2':
//          console.log('Весна')
//         break
//     case '3':
//          console.log('Лето')
//         break
//      case '4':
//          console.log('Осень')
//         break
//     default:
//         console.log('Нет такого времени года')
// }

/*Переменная num=28, ее нужно перебрать в цикле и вывести только четные числа
 */

const max = 28;
let i;

for (i = 0; i <= max; i += 1){
    // if (i === 0) {
    //     continue
    // }
    // if (i % 2 === 0) {
    //     console.log(i)
    // };
    i % 2 === 0 && i !== 0 ? console.log(i) : null;
}
// обратить внимание на null в тернарном операторе (continue не подходит)