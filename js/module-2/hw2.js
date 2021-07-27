// function findLongestWord(string) {
//   // Change code below this line
//    let array = string.split(" ");

//     console.log(array);
//     let longestWord = array[0];
//     console.log(longestWord);
//     for (let i = 0; i < array.length; i += 1) {
//         console.log(array[i].length > longestWord.length);
//         if (array[i].length > longestWord.length) {
//             longestWord = array[i]
//          }
//     }

//     console.log(longestWord)
//     return longestWord
//    // Change code above this line
// }

// findLongestWord('hello my friends');

//     function findLongestWord(string) {
//   // Change code below this line
//   let array = string.split(" ");
//       let longestWord = '';
      
//     for (const word of array) {
//        if (word.length > longestWord.length) {
//             longestWord = word
//          }
//     }
   
//     return longestWord
//    // Change code above this line
// }

// console.log(findLongestWord('hello my friends'));


// Дополни код функции createArrayOfNumbers(min, max) так,
// чтобы она возвращала массив всех целых чисел 
// от значения min до max.
function createArrayOfNumbers(min, max) {
    const numbers = [];
 
  // Change code below this line
    for (let i = min; i <= max; i += 1) {
        numbers.push(i);
     }

  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(1, 10))

// Напиши функцию getCommonElements(array1, array2) 
// которая получает два массива произвольной длины 
// в параметры array1 и array2, и возвращает новый массив, 
// состоящий из тех элементов, которые присутствуют 
// в обоих исходных массивах.

function getCommonElements(array1, array2) {
  // Change code below this line
    console.log(array1);
    console.log(array2);
    let newArray = [];
    for (let i = 0; i <= array1.length; i += 1) {
        if (array2.includes(array1[i])) {
            newArray.push(array1[i])
        }
    }
    return newArray

 // Change code above this line
}

console.log(getCommonElements([1, 2, 5, 4, 7, 9], [3, 5, 4, 7, 5, 9]))

// Выполни рефакторинг функции filterArray(numbers, value) 
// заменив цикл for на for...of.

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

    for (let number of numbers) {
        
    if (number > value) {
      filteredNumbers.push(number);
    }
    }
    
  return filteredNumbers;
  // Change code above this line
}

console.log(filterArray([1,3,5,6,8,7,4], 5))

// Напиши функцию getEvenNumbers(start, end) 
// которая возвращает массив всех чётных чисел 
// от start до end.Чётным считается число которое 
// делится на 2 без остатка(10 % 2 === 0).

function getEvenNumbers(start, end) {
   // Change code below this line
    let evenNumbersArray = [];
    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            evenNumbersArray.push(i)
         }
     }
    return evenNumbersArray
    
    // Change code above this line
}
  
console.log(getEvenNumbers(3, 9))

// Напиши функцию includes(array, value), 
// которая делает тоже самое, что и метод 
// массива массив.includes(значение) - проверяет, 
// есть ли в массиве array значение value, 
// возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() 
// нельзя использовать метод массив.includes(значение).

function includes(array, value) {
  // Change code below this line
    for (let item of array) {
        if (value === item) {
            return true
        };
    }
    return false
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"],
    "Jupiter"));
