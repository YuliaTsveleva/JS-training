// Массивы
const arr = [1, 2, 3, 4, 5, '6', [1, 2], {}, null, undefined];

// arr[1] = 99;

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[55]);

// console.log(arr.length);

// console.log(arr[6]);
// console.log(arr[6][1]);

// const matrix = [
// [1,2,3],
// [4,5,6],
// [7,8,9],
// ]
// console.log(matrix[1][1]);

// arr.push(19);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(88);
// console.log(arr);

// console.log(arr.indexOf(99));
// console.log(arr.includes(4));
// console.log(arr.includes(45));

// const arr2 = arr.slice(0, 3);
// console.log(arr2);

// const arr3 = arr.slice();
// console.log(arr3);

// arr.splice(0,0, 22, 33)
// console.log(arr);

// slice не изменяет исходный массив, splice menbhetn исходный массив

// Функции
// console.log(sum1(2, 8))
// console.log(sum2(2, 8))  нельзя вызвать до объявления

// function declaration
function sum1(param1, param2) {
    //  console.log(arguments)
    return param1 + param2
}

// function expression
const sum2 = function (param1, param2) {
    // console.log(arguments)
    return param1 + param2
}
 
// arrow function
const sum3 = (param1, param2) => param1 + param2;
const sum4 = (param1, param2) => {
        // console.log(arguments) в стрелочной нет псевдомассива arguments
    return param1 + param2
};

// console.log(sum1(2, 8))
// console.log(sum2(2, 8))
// console.log(sum3(2, 8))
// console.log(sum4(2, 8))

// Objects
const human = {
    age: 45,
    name: 'Petr',
    friends: [
        {
            name: 'Gena'
        },
        {
            name: 'Roman'
        }
    ],
    sayHello() {
        console.log(`Hello, my Friend`)
    }
  
}

console.log(human);
console.log(human.age);
console.log(human.friends);
console.log(human.friends[1].name);

human.sayHello()

console.log(human.sayHello);
console.log(human.sayHello());

human.food = 'Pelmeni';
console.log(human);

delete human.food
console.log(human);

const keys = Object.keys(human);
console.log(keys);

const values = Object.values(human);
console.log(values);

const entries = Object.entries(human);
console.log(entries)