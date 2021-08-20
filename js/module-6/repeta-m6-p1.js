/*

forEach
map
filter
find




*/

// every & some

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  {
    id: "player-5",
    name: "Chelsey",
    timePlayed: 80,
    points: 48,
    online: true,
  },
];

// Array.prototype.every()
// - поэлеметно перебирает оригинальный массив
// - возвращает true если все элементы массива удовлетворяют условия

const isAllOnline = players.every((player) => player.online);
// console.log("isAllOnline: ", isAllOnline);

// Array.prototype.some()
// - поэлеметно перебирает оригинальный массив
// - возвращает true если хотя бы один элемент массива удовлетворяет условия

const isAnyOnline = players.some((player) => player.online);
// console.log("IsAnyOnline: ", isAnyOnline);

const anyHardcorePlayers = players.some((player) => player.timePlayed > 400);
// console.log("anyHardcorePlayers: ", anyHardcorePlayers);

//
// reduce

// Array.prototype.reduce()
//  - поэлементно перебирает оригинальный массив
//  - возвращает что угодно
//  - заменяет все на свете, но использовать нужно с умом

// const numbers = [5, 10, 15, 20, 25];

// если не задать начальное значение аккумулятора,
// он возьмет значение первого элемента коллекции!

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// в данному случае можно без 0, будет работать также

// считаем общую з/п

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);

// console.log(totalSalary);

// считаем общее количество часов

const totalTimePlayed = players.reduce(
  (totalTime, { timePlayed }) => totalTime + timePlayed,
  0
);

//  или

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0
// );

// console.log(totalTimePlayed);

// считаем сумму корзины товаров

const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);

// console.log(totalAmount);

// собираем все теги из твитов

const tweets = [
  { id: "001", likes: 5, tags: ["js", "nodejs"] },
  { id: "002", likes: 2, tags: ["html", "css"] },
  { id: "003", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "004", likes: 8, tags: ["css", "react"] },
  { id: "005", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// ведем статистику тегов

// const tagStats = allTags.reduce((acc, tag) => {
//   console.log(acc);
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});
// console.log(tagStats);

// переписываем имутабельно - на каждой итерации создаем
// новый объект аккумулятора

const tagStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);
// console.log(tagStats);

const user = {
  name: "Mango",
};

const key = "name";

// console.log(user[key]);
// console.log(user["name"]);
// равнозначные записи

//
// sort()
// Array.prototype.sort(callback(currentEl, nextEl){})
// - сортирует и изменяет оригинальный массив
// - По умолчанию:
//      - сортирует по возрастанию
//      - приводит элементы к строке и сортирует по Юникоду

const numbers = [1, 9, 6, 2, 3];
numbers.sort();
console.log("numbers: ", numbers);

const letters = ["b", "B", "a", "A"];
letters.sort();
console.log("letters: ", letters);

// compareFunction - функция сравнения (callback)
// Элементы массива сортируются в соответствии с ее
// возвращаемым значением
// - если compareFunction(A, B) меньше 0, сортировка поставит А перед В
// - если compareFunction(A, B) больше 0, сортировка поставит В перед А
// - если compareFunction(A, B) вернет 0, сортировка оставит А и В
// неизменными по отношению друг к другу, но отсортирует их по
// отношению ко всем другим элементам

numbers.sort((curEl, nextEl) => {
  return curEl - nextEl;
});
console.log(numbers);

numbers.sort((curEl, nextEl) => {
  return nextEl - curEl;
});
console.log(numbers);

// а если не сортировать оригинал
// как сделать копию массива, чтобы не сортировать оригинал
// - Array.prototype.slice()
// - Операция spread

const copy = [...numbers];
console.log(numbers === copy);

copy.sort();

console.log("copy: ", copy);
console.log("numbers: ", numbers);

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("descSortedNumbers: ", descSortedNumbers);

const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("ascSortedNumbers: ", ascSortedNumbers);

const descSortedNumbersAscReversed = [...numbers].sort().reverse();
console.log("descSortedNumbersAscReversed: ", descSortedNumbersAscReversed);
