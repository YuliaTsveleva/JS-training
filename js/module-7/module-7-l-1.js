// window - 1й глобальный объект
console.log(window);
// window.alert("ok");
// alert("ok");
// одно и то же

// document - 2й глобальный объект
console.dir(document);

// доступ по селектору тега
const titleByTag = document.querySelector("h1");

// console.log(titleByTag);
// console.dir(titleByTag);

// доступ по селектору идентификатора
const titleById = document.querySelector("#title");

// console.log(titleById);
// console.dir(titleById);

const titleByIdOk = document.getElementById("title");
// console.log(titleByIdOk);
// console.dir(titleByIdOk);
// этот метод лучше, быстрее, новее

// доступ по селектору класса
const titleByClass = document.querySelector(".main-class");

// console.log(titleByClass);
// console.dir(titleByClass);

const elemsByClass = document.getElementsByClassName("my-class");
// console.log(elemsByClass);
// console.dir(elemsByClass);

const elemsByClassName = document.querySelectorAll(".my-class");
// console.log(elemsByClassName);
// console.dir(elemsByClassName);

// доступ по селектору атрибута
const titleByAttr = document.querySelector("[data-name='data-title']");
// можно со значением, можно без
// console.log(titleByAttr);
// console.dir(titleByAttr);

// доступ по селектору наследника
const elemByParent = document.querySelector("body>p");
// доступ к первому тегу p в body
// console.log(elemByParent);
// console.dir(elemByParent);

// доступ по селектору потомка
const elemByProto = document.querySelector("body p");
// console.log(elemByProto);
// console.dir(elemByProto);

// доступ к группе элементов
const elemsByParent = document.querySelectorAll("body>p");
// console.log(elemsByParent); //NodeList - коллекция элементов с методом forEach
// console.dir(elemsByParent);

const elemsByProto = document.querySelectorAll("body p");
// console.log(elemsByProto);
// console.dir(elemsByProto);

// Узлы: узел-элемент (тег), узел-комментарий, текстовый узел

// Навигация
// console.log(titleByTag.parentNode);
// console.log(titleByTag.childNodes);
// console.log(titleByTag.children);

// свойства элементов
console.dir(titleByTag);

// id - отдельное свойство
// class - хранится в свойстве classList в виде DOMTokenList

// console.log(titleByTag.classList);
// titleByTag.classList.add("new-class");
// titleByTag.classList.add("title");
// console.log(titleByTag.classList.contains("fdhgcygfv"));
// console.log(titleByTag.classList.contains("new-class"));
// titleByTag.classList.remove("main-class");
// titleByTag.classList.replace("title", "new-class");
// titleByTag.classList.add("title");
// console.log(titleByTag.classList);

// titleByTag.classList.toggle("new-class");
// console.log(titleByTag.classList);
// titleByTag.classList.toggle("new-class");
// console.log(titleByTag.classList);

// attributes
// console.log(titleByTag.attributes);

// id
// console.log(titleByTag.id);
// console.log(titleByTag.attributes.id);

// console.log(titleByTag.value); //undefined так как нет свойства value

// создание узлов 2 способа
// 1 createElement()=>object

const button = document.createElement("button");
console.log(button);
button.textContent = "click";
console.log(button.textContent);
console.dir(button);
button.style.background = "green";
button.classList.add("my-btn");
button.setAttribute("type", "button");
button.dataset.type = "my-button";

// 2 '' - строчная разметка => string
const stringBtn = `<button class="my-btn" type="button" data-type="my-button" style="background: red;">click</button>`;
console.dir(stringBtn);

// клонирование - создание элемента на базе исходного
const cloneButton = button.cloneNode(true); //полная клпия со всей вложенностью
console.log(cloneButton);
const cloneButton2 = button.cloneNode(false); //без текст-контента - неглубокое клонирование
const cloneButton3 = button.cloneNode(); //то же самое
console.log(cloneButton2);
console.log(cloneButton3);

// const cloneButton4 = stringBtn.cloneNode(true); - не можеи клонировать строчную разметку

// встраивание элементов - 2 вида
// 1
// для объектов, созданных через createElement
// перед и после элемента
// titleByTag.after(button);
// titleByTag.before(cloneButton);
// внутрь элемента
titleByTag.appendChild(cloneButton2);
titleByTag.prepend(cloneButton3);

// для строк
// innerHTML
// titleByTag.innerHTML = "";

// insertAdjacentHTML
titleByTag.insertAdjacentHTML("beforebegin", stringBtn);

// удаление
// для строк
// titleByTag.innerHTML = "";

titleByTag.removeChild(cloneButton2);

cloneButton3.remove();
