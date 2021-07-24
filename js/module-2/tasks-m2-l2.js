// Проверка года на високосный/невисокосный
function checkYear(year) {
    let condition = year % 4 === 0
    if (condition) return `${year} - високосный год` 
    return `${year} - невисокосный год`
}

// console.log(checkYear(2020));
// console.log(checkYear(2021));

/* написать функцию - компьютер загадывает число от 1 до 10 
и предлагает пользователю угадать. Пользователь вводит свой вариант 
и получает ответ - выиграл или нет*/

function game() {
    let comp = Math.ceil(Math.random() * 10);
   
    // let user = prompt(`Введите число от 1 до 10`)
    console.log(comp, user)
    if (comp == user) return `You are win!!!`
    return `Looser!!!`
}
// console.log(game())

/* Написать программу, которая будет находить сумму, разность,
произведение и частное двух чисел. Пользователь вводит два числа, 
потом вводит знак операции и получает результат в формате 'Сумма 
чисел a и b = результат' */

function getMathResult() {
    // let num1 = prompt(`Enter the first number`);
    // let num2 = prompt(`Enter the second number`);
    // let symbol = prompt(`Enter the symbol`);
    let total = 0;
    console.log(num1, num2, symbol)
    switch (symbol) {
        case '+':
            total = Number(num1) + Number(num2);
            break
        case '-':
            total = num1 - num2;
            break
        case '*':
            total = num1 * num2;
            break
        case '/':
            total = num1 / num2;
            break
        default: console.error(`Error`)
    }
    return total
}
// console.log(`result`, getMathResult());

// при сложении строчных цифр происходит конкатенация, поэто в case с '+' нужен number