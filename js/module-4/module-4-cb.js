// high-order function

// function highOrder(value, callback) {
//     // console.log(`Hello, I am high-order function`)
//     callback(value);
// };
 
// highOrder(`hello, I am callback`, setMessage);

// // callbach function
// function setMessage(message) {
//     console.log(message)
// };

// example 1
// function toDoMeal(prods, cb) {
//     console.log(prods);
//     let result = cb(prods)
//     console.log(result)
//     // console.log(`You dish -`)
// }

// toDoMeal(['bread', 'meat'], toDoSandwich);
// toDoMeal(['banana', 'orange'], toDoSandwich);

// function toDoSandwich(arr) {
//     // console.log(arr);
//     let bread = arr.includes('bread')
//     console.log(bread)
//     return bread ? 'sandwich is done!' : 'no bread';
// }

// example 2
const results = [{ mail: "", scores: 10 }];
function getResultByTest(getMax, getMin, mail, ...scores) {
    // console.log(mail);
    // console.log(scores);
    // 1 добавляем в базу данные о тесте
    let total =0 
    for (let i of scores) {
        total+=1
    }
    console.log(total)
    const obj = { mail, scores: total }
    results.push(obj)
    console.log(results)
    // 2 проверяем обновленные данные с помощью cb
    const scoresArr=[]
    for (let obj of results) {
        console.log(obj.scores)
        scoresArr.push(obj.scores)
    }
    console.log(scoresArr)
    let max = getMax(scoresArr)
    let min = getMin(scoresArr)
    console.log(`max:`,max, `min:`,min)
 }

getResultByTest(getMaxValue, getMinValue, 'a@gmail.com', 1,1,1,1,1,1,1,1,1,1,1,1)
getResultByTest(getMaxValue, getMinValue, 'b@gmail.com', 1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1)

// callbacks
function getMaxValue(arr) {
    return Math.max(...arr)
 }

function getMinValue(arr) {
    return Math.min(...arr)
}

// example 3
    let firstNum = 1000; //Global variable

const toGetFibonacci = (count, callback) => {
    let firstNum = 0;
    let secondNum = 1;
    const arrWithValues = [firstNum, secondNum];
    // console.log(firstNum)
    // хочу получить массив с числами фибоначчи
    console.log(arrWithValues)
    for (let i = 3; i <= count; i += 1) {
        let newNumber = firstNum + secondNum
        // console.log('newNumber',newNumber)
        firstNum = secondNum;
        secondNum = newNumber;
        arrWithValues.push(newNumber)
    }
    
console.log(arrWithValues)

    // callback(count);
let result = callback(arrWithValues)
    return result
};
 
console.log('четные:',toGetFibonacci(18, getEvenValues))
console.log('сумма',toGetFibonacci(7, getSum))

// console.log(firstNum)

// callback
function getEvenValues(arr) {
    const arrValues = []
    for (let num of arr) {
        if (num % 2 === 0) {
            arrValues.push(num)
        }
    }
    return arrValues
}
 
function getSum(arr){
    let total = 0
    for (let i of arr) {
    total += i
    }
    return total
}