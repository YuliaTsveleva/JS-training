/*Посчитать общую сумму покупок в корзине */
const cart = [54, 28, 105, 70, 92, 17, 120];

// 1 перебрать массив
// 2 сделать переменную total - до цикла, иначе не будет видна за пределами цикла
// 3 на каждой итерации получить доступ к элементу массива и приплюсовать к total
let total = 0;

for (let i = 0; i < cart.length; i += 1) {
    console.log(cart[i]);
    total += cart[i];
}

for (const value of cart) {
    total += value
}

console.log(`Total:`, total);

// добавить такс 10%

for (let i = 0; i < cart.length; i += 1) {
    cart[i] = Math.round(cart[i]*=1.1);
}
console.log(cart);

/*Напиши скрипт, который посчитает сумму всех четных чисел в массиве */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// 1 - переменная summ
// 2 - перебрать массив
// 3 - на каждой итерации проверить элемент на четность
// 4 - если четный, плюсуем к summ

let summ = 0;

for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];
    console.log(number);
    if (number % 2 === 0) {
        console.log(`Четное`)
        summ += number;
    }
}

for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 0) {
        console.log(`Четное`)
        summ += number;
    }
}
 
for (const number of numbers) {
    if (number % 2 !== 0) {
        console.log(`Эту итерацию нужно пропустить"`)
        continue
    }
console.log(`${number}`, 'четное')
summ += number;
}

console.log(`summ`, summ);

/* Напиши скрипт поиска логина

*/


