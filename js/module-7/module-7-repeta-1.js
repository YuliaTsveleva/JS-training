/*
document.querySelector(selector) и document.querySelectorAll(selector)
selector - любой валидный css-селектор
*/

// Атрибуты
// get
// set
// remove
// has

// elem.getAttribute('имя атрибута')
// elem.имяатрибута

// data- атрибуты

// dataset - объект всех дата-атрибутов (массив)

// const magicBtn = document.querySelector(.'js-magic-btn');

// classList
// add(class)
// magicBTN.addEventListener('click', ()=>{
// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// navEl.classList.add('super-cool')
// });

// remove(class)
// navEl.classList.remove('super-cool')

// toggle(class)
// magicBtn.addEventListener("click", () => {
//   navEl.classLict.toggle("qwerty");
// });

// replace(oldClass, newClass)
// navEl.classList.replace("super-cool", "qwerty");

// contains(class)

// Навигация по  DOM
// предки, потомки, родители, дети, соседи

// const navEl = document.querySelector(".site-nav");
// console.log(navEl);

// const firstNavItemEl = navEl.querySelector(".site-nav__item");
// console.log(firstNavItemEl);

// const firstChildNavEl = navEl.firstElementChild;
// console.log(firstChildNavEl);

// const secondChildNavEl = navEl.firstElementChild.nextElementSibling;
// console.log(secondChildNavEl);

// const parentList = secondChildNavEl.parentElement;
// console.log(parentList);

// const lastChild = secondChildNavEl.parentElement.lastElementChild;
// console.log(lastChild);

// const children = navEl.children;
// console.log(children);
// console.log(children[0]);
// console.log(children[children.length - 1]);

// создание
const titleEl = document.createElement("h1");
titleEl.classList.add("page-title");
titleEl.textContent = "Это заголовок страницы :)";
console.log(titleEl);
// создается в памяти, в документе сразу автоматически НЕ появляется

// Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems)
document.body.appendChild(titleEl);
// станет последним ребенком
// appendChild добавляет в конец

const imageEl = document.createElement("img");
console.log("imageEl:", imageEl);
imageEl.src = "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg";
imageEl.alt = "flowers";
console.log(imageEl.width);
imageEl.width = 300;
console.log(imageEl.width);

document.body.appendChild(imageEl);

const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item");
const navLinkEl = document.createElement("a");
navLinkEl.textContent = "Личный кабинет";
navLinkEl.href = "/profile";
navLinkEl.classList.add("site-nav__link");

console.log(navItemEl);
console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector(".site-nav");
// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);

// добавить несколько элементов за одно обращение
const heroEl = document.querySelector(".hero");
heroEl.append(titleEl, imageEl); //сколько угодно элементов, но важен порядок

// создание колеекции элементов
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607DB" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const option = colorPickerOptions[0];

const elements = colorPickerOptions.map((option) => {
  const buttonEl = document.createElement("button");
  buttonEl.type = "button";
  buttonEl.classList.add("color-picker__options");
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;

  return buttonEl;
});

console.log(elements);

const colorPickerContainer = document.querySelector(".js-color-picker");

colorPickerContainer.append(...elements);

// Пишем функцию для создания разметки color-picker

const makeColorPickerOptions = (options) => {
  return options.map((option) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add("color-picker__options");
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl;
  });
};

const elements1 = makeColorPickerOptions(colorPickerOptions);
colorPickerContainer.append(...elements1);

// создаем карточку продукта
const product = {
  name: "сервоприводы",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure porro quia doloribus ea est veniam voluptatem voluptatibus maxime quod.",
  price: 2000,
  available: true,
  onSale: true,
};

const productEl = document.createElement("article");
productEl.classList.add(".product");

const nameEl = document.createElement("h2");
nameEl.textContent = product.name;
titleEl.classList.add("product__name");

const descrEl = document.createElement("p");
descrEl.textContent = product.description;
descrEl.classList.add("product__descr");

const priceEl = document.createElement("p");
priceEl.textContent = `Цена: ${product.price}`;
priceEl.classList.add("product__price");

console.log(productEl);
console.log(nameEl);
console.log(descrEl);
console.log(priceEl);

productEl.append(nameEl, descrEl, priceEl);
console.log(productEl);

// type="module"
// export default[массив объектов]
// в другом файле import products from 'путь'

/*

*/

// innerHTML - заменить полностью, очистить полностью (нельзя делать +=)
// insertAdjacentHTML - чтобы добавлять новое

// appendChild вставляет dom-узлы, элементы, а insertAdjacentHTML - строку

// таблица транзакций
/*
import transactionHistory from './путь'

const makeTransactionTableRowMarkup = ({id, amount, date, business, type, name, account}) => {
  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
}

console.log(transactionHistory);
console.log(makeTransactionTableRowMarkup(transactionHistory[0]))

const tableEl = document.querySelector('.js-transaction-table')

const makeTransactionTableRows = transactionHistory
  .map(makeTransactionTableRowMarkup)
  .join('')

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows)
console.log(makeTransactionTableRows)



*/
