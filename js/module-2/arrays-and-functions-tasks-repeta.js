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

/*та же задача через функцию*/
const calculateTotalPrice = function (items) {
    console.log(items);
    let total = 0;
    for (const item of items) {
        total += item;
    }
    return total
}

const r1 = calculateTotalPrice([1, 2, 3]);

console.log(`общая сумма покупок`, r1);
console.log(calculateTotalPrice([5, 10, 15, 20]));
console.log(calculateTotalPrice([100, 200, 300]));

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
- если логина нет, вывести сообщение 'Пользователь [логин] не найден'
- если нашли логин, вывести сообщение 'Пользователь [логин] найден

- сначала через for
- потом через for...of
- логика break
- метод includes() с тернарным оператором
*/

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
let message = `Пользователь ${loginToFind} не найден`;

for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];
    if (login === loginToFind) {
        message = `Пользователь ${loginToFind} найден`
        break
     }
}
    // обратить внимание - тут не нужен else
console.log(message);
 

for (const login of logins) {
    if (login === loginToFind) {
         message = `Пользователь ${loginToFind} найден`
        break
     }
    
}
console.log(message);


console.log(logins.includes(loginToFind));
const message1 = logins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден`
    : `Пользователь ${loginToFind} не найден`;
console.log(message1);

/*та же задача через функцию*/
// const findLogin = function (allLogins, loginToFind) {
//      for (const login of allLogins) {
//         if (login === loginToFind) {
//            return message = `Пользователь ${loginToFind} найден`;
//         }
//     }
//     return `Пользователь ${loginToFind} не найден`;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

/*та же задача через ьернарный оператор*/
const findLogin = function (allLogins, loginToFind) {
    return allLogins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден`
        : `Пользователь ${loginToFind} не найден`;
   
}

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));

/*Напиши скрипт поиска самого маленького числа в массиве,
при условии, что числа уникальные (не повторяются) */

const numbers1 = [51, 18, 13, 24, 7, 85, 19];

let smallestNumber = numbers1[0];

for (const number of numbers1) {
    console.log(number);
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}
console.log(`smallestNumber:`, smallestNumber);

/*та же задача через функцию*/
const findSmallestNumber = function (numbers) {
    let smallestNumber = numbers[0];

for (const number of numbers) {
    console.log(number);
    if (number < smallestNumber) {
        smallestNumber = number;
    }
    }
    return smallestNumber;
}

console.log(findSmallestNumber([3, 8, 12, -2, 15]));
console.log(findSmallestNumber([100,54,8,12,47]));
console.log(findSmallestNumber([7,21,84,15,4]));

// Найти самое большое число
const numbers2 = [51, 18, 13, 24, 7, 85, 19];
let biggestNumber = numbers2[0];
for (const number2 of numbers2) {
    console.log(number2);
    if (number2 > biggestNumber) {
        biggestNumber = number2;
     }
}
console.log(`biggestNumber:`, biggestNumber);

/* Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
Элементов может быть произвольное количество.
Пусть элементы массива в строке будут разделены запятой.
- Сначала через for
- Потом через join()
*/

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// должно получиться 'Mango,Poly,Kiwi,Ajax'

let string = '';
for (const friend of friends) {
    string += friend+',';
}
 
string = string.slice(0, string.length - 1);
console.log(string);

const string1 = friends.join(',');
console.log(string1);

/*Напиши скрипт, который заменяет регистр каждого символа 
в строке на противоположный
Например, "JavaScript" на "jAVAsCRIPT"
*/

const string2 = 'JavaScript';

const letters = string2.split('');

let invertedString = '';

console.log(letters);
for (const letter of letters) {
    console.log(letter);
    // if (letter === letter.toLowerCase()) {
    //     console.log(`Эта буква в нижнем регистре -`, letter);
    //     invertedString += letter.toUpperCase();
    // } else {
    //     invertedString += letter.toLowerCase();
    // }

    invertedString += letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase()
 }

console.log(invertedString);

/*та же задача через функцию*/



/* Делаем slug в URL из названия статьи (например, на dev.to)
Заголовок статьи состоит только из букв и пробелов

- нормализируем строку
- разбиваем по словам
- сшиваем в строку с разделителями

должно получиться top-10-benefits-of-react-framework
*/

//  через функцию
const slugify = function (string) {
    return string.toLowerCase().split(' ').join('-');
};

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azur Static Web Apps are Awesome'));


/*Напиши функцию logItems для перебора и логирования массива*/
const logItems = function (items) {
    for (const item of items) {
        console.log(item);
    }
}

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);