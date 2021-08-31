// // счетчик

// const refs = {
//   increment: document.querySelector(".increment"),
//   decrement: document.querySelector(".decrement"),
//   counter: document.querySelector(".counter"),
// };

// console.dir(refs.counter);

// refs.increment.addEventListener("click", () => {
//   let toNumber = Number(refs.counter.innerHTML);
//   toNumber += 1;
//   refs.counter.innerHTML = toNumber;
// });
// refs.decrement.addEventListener("click", () => {
//   let toNumber = Number(refs.counter.innerHTML);
//   toNumber -= 1;
//   refs.counter.innerHTML = toNumber;
// });

// const products = ["apple", "plum", "orange", "grape", "melon"];

// const list = document.querySelector(".list");

// const newList = [];

// products.forEach((product) => {
//   const element = document.createElement("li");
//   element.innerText = product;
//   newList.push(element);
// });

// console.log(newList);

// list.append(...newList);

// // вариант 2
// const products = ["apple", "plum", "orange", "grape", "melon"];

// const list = document.querySelector(".list");

// const newList = [];

// // products.forEach((product) => {
// //   const element = `<li>${product}`;
// //   newList.push(element);
// // });

// const elements = products.reduce((acc, elem) => acc + `<li>${elem}`, "");

// console.log(newList);
// list.insertAdjacentHTML("beforeend", elements);

// // list.insertAdjacentHTML("beforeend", newList.join(""));

// 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const gallery = document.querySelector(".gallery");
// console.log(gallery);

// const newGallery = images.map(
//   (image) => `<li><img class="image" src="${image.url}" alt="${image.alt}"><li>`
// );

// gallery.insertAdjacentHTML("beforeend", newGallery.join(""));

// 4

const refs = {
  increment: document.querySelector(".increment"),
  decrement: document.querySelector(".decrement"),
  text: document.querySelector(".text"),
};

console.dir(refs.text);

refs.text.style.fontSize = "15px";

refs.increment.addEventListener("click", () => {
  const newSize = Number.parseInt(refs.text.style.fontSize) + 1;
  refs.text.style.fontSize = newSize + "px";
  console.log(refs.text.style.fontSize);
});
refs.decrement.addEventListener("click", () => {
  const newSize = Number.parseInt(refs.text.style.fontSize) - 1;
  refs.text.style.fontSize = newSize + "px";
});
