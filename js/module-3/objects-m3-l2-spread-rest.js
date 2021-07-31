// SPREAD - распыление

// распыление элементов массива - Math.min(...arr)
const numbers = [1, 2, 3, 4, 5, 6, 7, 84];

console.log(Math.max(3, 2, 5, 4, 7, 8, 5, 6, 4));
console.log(Math.max(numbers));   //NaN
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));


// создание нового массива через распыление исходного

function getResult(a, b) {
    let total = 0;
    console.log(arguments); //pseudoarray
    const nums = [...arguments]
   
    for (let num of nums) {
          total += num;
    }
//    console.log(nums);
    return total;
 }
// console.log(getResult(2, 5, 4, 5, 6));

// + slice() || добавить любое количесвто элементов

const first = [1, 2, 3];
const cloneFirst = first.slice(1, 2);
// console.log(cloneFirst);
// console.log(first === cloneFirst);

const newArr = first.concat(cloneFirst);
// console.log(newArr);

const spreadArr = [...first, 444, ...first.slice(1,2)]
// console.log(spreadArr);

// распыление объектов {...obj1, ...obj2}, 
// можно добавлять отдельные свойства

const product = {
    title: 'Cake',
    name: 'Napoleon',
}

console.log(product);

const params = {
category: 'sweets',
}

const newProduct = { ...product, price: 30, ...params };
console.log(newProduct);

console.log(product === newProduct);

// REST - сбор
// аргументы в функциях в полноценный массив

const getTotalResult = (...args) => {
    console.log(args);
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total;
 }

let result = getTotalResult(23, 45, 23, 45, 56, 15, 32, 43, 65);
console.log('result', result);

result = getTotalResult(25, 48, 15, 65, 84, 48);
console.log('result', result);

// пример с нашими тестами
// (email, arg1, ..., argN)


// {studentMail: '', score: 0}
const scoresOfStudent = [];

function getResultOfTests(mail, ...scores) {
    
    // console.log(mail)
    // console.log(args)
    let totalScore = 0
    for (let score of scores) {
        totalScore +=score
    }
    console.log('totalScore', totalScore)
    console.log(scoresOfStudent)
    const obj = {
        email: mail,
        score: totalScore,

    }
    console.log(obj)
    scoresOfStudent.push(obj)
    console.log(scoresOfStudent)
}

getResultOfTests('test@gmail.com', 0, 1, 1, 0, 1, 1, 1, 0, 0, 0)
getResultOfTests('test1@gmail.com', 0, 0, 1, 0, 1, 0, 1, 0, 0, 0)
getResultOfTests('test2@gmail.com', 0, 1, 1, 0, 1, 1, 1, 0, 1, 1)
