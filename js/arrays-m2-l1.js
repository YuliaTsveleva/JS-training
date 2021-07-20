// Массивы
// Массив - это проиндексированная последовательность элементов
// конструктор Array() 
// индексация с 0

console.log([]);
console.log([1, 2]);

// Длина массива - length - колтчество элементов внутри массива
// литерал массива []

const array = [1, 2, 3, "JavaScrypt", 4, 5, 6]; //создание нового массива
console.log(array);
console.log(array.length);

// read (get) element by arrays
console.log(array[0]);
console.log(array[3]);

// update (patch) element in array
array[0] = "I Love";
console.log(array[0]);
console.log(array);
// в консоли показывает знаечния, актуальные на тот момент, 
// а при раскрытии текущие значения

// delete element in array
delete array[1];
delete array[2];
console.log(array[1]);
console.log(array[2]);
console.log(array);

// add element by index
array[1] = 'HTML';
array[2] = 'CSS';

// iterate by array (for & for ...of)
// цикл for
// break & continue
for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'string') {
        continue
    }
    console.log(`Итерация ${i+1} -`, array[i])
    // console.log(`index: `, i)
 }
    
for (let i = 0; i < array.length; i += 1) {
    console.log(`break`);
    if (typeof array[i] === 'string') {
        break
    }
    console.log(`Итерация ${i+1} -`, array[i])
  
 }

// multidimensional arrays - многомерные массивы
const multiArray = [
    [1, 10, 100, 1000],
    [2, 20, 200, 2000],
    [3, 30, 300, 3000],
]
console.log(multiArray);
console.log(multiArray.length);
console.log(multiArray[0]);

let it = 1;
for (let array of multiArray) {
    console.log(`Iteration ${it}`, array);
    it += 1;
    for (let zz of array) {
        console.log(`zz`, zz);
        console.log(`zz+1`, zz + 1);
        // if (zz === 1) {
        //     console.log(zz);
        // }
    }
}
    
// Примитивы присваиваются как копия
let age = 30;
console.log(`age`, age);
let myAge = age;
console.log(`my age`, myAge);
console.log(age === myAge);
age = 35;
console.log(`age`, age);
console.log(`my age`, myAge);
console.log(age === myAge);

const numbers = [12, 23, 34, 45];
console.log(`numbers`,numbers);

const myNumbers = numbers;
console.log(`myNumbers`, myNumbers);
// изменим значение 1го элемента в исходном массиве
numbers[0] = 100500;
console.log(`numbers`, numbers);
console.log(`myNumbers`, myNumbers);
// с массива не снимается копия, переменная хранит ссылку 
// на ячейку памяти, в котрой лежит массив.
// Другой переменной присваиваются не значения массива, 
// а ссылка на ячейку.

// Array methods. Методы массива.
// Метод массива - это функция, принадлежащая конструктору array,
// котоая выполняет определенное действие

// метод slice()

const mySliceNumbers = numbers.slice();
console.log(`my slice munbers`, mySliceNumbers);
console.log(numbers === mySliceNumbers); // false, так как разные йчейки памяти

numbers[0] = 12;
console.log(`numbers`, numbers);
console.log(`my slice munbers`, mySliceNumbers);

const firstTwoElems = numbers.slice(0, 2);  //c 0 по 2 невключительно
console.log(`first two elems`, firstTwoElems);

// split() & join()

let myString = 'My String';
console.log(typeof myString, myString);
console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);
console.log(myString[3]);
console.log(myString[4]);
console.log(myString[5]);
console.log(myString[6]);
console.log(myString[7]);
console.log(myString[8]);
console.log(myString.length);

// Преобразование строки в массив
const arrayFromString = myString.split();
console.log(arrayFromString);
console.log(typeof arrayFromString); //почему object, а не string??

const arrayFromString1 = myString.split(' ');
console.log(arrayFromString1);

const arrayFromString2 = myString.split('s');
console.log(arrayFromString2);

const arrayFromString3 = myString.split('S');
console.log(arrayFromString3);

// Преобразование из массива в строку
const myArray = ['I', 'Love', 'JS'];
console.log(myArray);
console.log(myArray.length);
let arrayToString = myArray.join();
console.log(arrayToString);
arrayToString = myArray.join(' ');
console.log(arrayToString);
let arrayToString1 = myArray.join('-');
console.log(arrayToString1);

// indexOf & includes()
console.log(`myArray`, myArray);
console.log(`myString`, myString);
// indexOf() вернет индекс элемента
// includes() вернет true или false

// добавление и удаление элементов
// unshift() и push() - добавление в начало и конец массива соответственно
// shift() и pop() - удаление из начала и конца массива соответственно
// unshift() и shift() - добавлениеи и удаление из начала
// push() и pop() - добавление и удаление с конца

const exampleArray = [1, 1, 2, 3, 4, 4];
console.log(exampleArray);
const unshiftElem = exampleArray.unshift(0, 0);
console.log(unshiftElem); //вернет новую длину массива
console.log(exampleArray);

const pushElem = exampleArray.push(5);
console.log(pushElem); //вернет новую длину массива
console.log(exampleArray);

// добавлять в начало и в конец можно любое количество элементов

const shiftElem = exampleArray.shift();
console.log(shiftElem); //вернет удаленный элемент
console.log(exampleArray);

const popElem = exampleArray.pop();
console.log(popElem); //вернет удаленный элемент
console.log(exampleArray);

// метод splice()
// может удалять элементы, добавлять элементы и заменять элементы в любом месте массива
// delete element - splice(idx, num)
// add new element - splice(idx, 0, el1, ..., el)
// replace element - splice(idx, num, el1, ..., el)
// num - кол-во элементов

let deleteSplice = exampleArray.splice(1, 1);
console.log(deleteSplice); //вернет удаленный элемент
console.log(exampleArray);

let addSplice = exampleArray.splice(7, 0, 5);
console.log(addSplice); //вернет пустой массив, так как ничего не удалено
console.log(exampleArray);
addSplice = exampleArray.splice(0, 0, 'I', 'Love', 'JS')
console.log(addSplice); //вернет пустой массив, так как ничего не удалено
console.log(exampleArray);

let replaceSplice = exampleArray.splice(7, 3, 'React', 'NodeJS')
console.log(replaceSplice); //вернет удаленные элементы
console.log(exampleArray);

// метод concat()
// конкатенация нескольких массивов
const firstPeace = [1, 2];
console.log(firstPeace);
const secondPeace = [3, 4];
console.log(secondPeace)
const thirdPeace = [5, 6];
console.log(thirdPeace);
const fullArray = firstPeace.concat(secondPeace, thirdPeace);
console.log(fullArray);
// concat() принимает через запятую массивы, 
// добавляя их последовательно к тому массиву, 
// на котром этот метод вызван
