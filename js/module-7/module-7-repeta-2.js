// события
// создание и удаление событий
// объект события
// поведение по умолчанию
// основные события мыши, форм, клавиатуры
// [список всех доступных событий](https://developer.mozilla.org/en-US/docs/web/Events)

// const targetBtn = document.querySelector(".js-target-btn");
// const addListener = document.querySelector(".js-add-listener");
// const removeListener = document.querySelector(".js-remove-listener");

// targetBtn.addEventListener("click", () => {
//   console.log("Клик");
// }); //тип события в виде строки, callback

// Именование колбеков для слушателей
// handle*: handleEvent или handleSubjectEvent
// *Handler: eventHandler или sublectEventHandler
// on*: onEvent или onSubjectEvent
// лучше с subject

// function handleTargerBtnClick() {
//   console.log("Клик");
// }

// function targetBtnClickHandler() {
//   console.log("Клик");
// }

// function onTargetBtnClick() {
//   console.log("Клик");
// }

// addListener.addEventListener("click", (event) => {
//   console.log(event);
//   console.log("вешаю слушателя событий на целевую кнопку");
//   targetBtn.addEventListener("click", onTargetBtnClick);
// });

// removeListener.addEventListener("click", (event) => {
//   console.log("снимаю слушатель с целевой кнопки");
//   targetBtn.removeEventListener("click", onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//   console.log("Клик по целевой кнопкe");
// }

// // ссылочная идентичность колбеков - выносить во внешние функции (иначе при отписке анонимки пройдут как две разные)

// function logMessage() {
//   console.log("Клик по целевой кнопкe");
// }

// // форма

// const form = document.querySelector(".js-register-form");
// // console.log(form);

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   // чтобы страница не перезагружалась при сабмите
//   event.preventDefault();
//   // предотвратить реакцию браузера на действие

//   const formElements = event.currentTarget.elements;

//   console.dir(formElements.subscription.value);
//   console.log("это сабмит формы");
//   const mail = formElements.email.value;
//   const password = formElements.password.value;
//   const subscription = formElements.subscription.value;

//   const formData = { mail, password, subscription };

//   console.log(formData);
// }

// Класс FormData - почитать

// form.addEventListener("submit", onFormSubmit1);

// function onFormSubmit1(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   // передаем ссылку на сам dom-элемент, а FormData собирает все значения полей внутри

//   console.log(formData);
//   formData.forEach((value, name) => {
//     console.log("onFormSubmit -> value", value);
//     console.log("onFormSubmit -> name", name);
//   });
// }

// Паттерн "Объект ссылок"

// const refs = {
//   input: document.querySelector(".js-input"),
//   nameLabel: document.querySelector(".js-button > span"),
//   licenseCheckbox: document.querySelector(".js-license"),
//   btn: document.querySelector(".js-button"),
// };

// // refs.input.addEventListener("focus", onInputFocus);
// // refs.input.addEventListener("blur", onInputBlur);
// // refs.input.addEventListener("change", onInputChange);
// // refs.input.addEventListener("input", onInputChange);

// // для текстовых полей используем тип события input, не change

// refs.input.addEventListener("input", onInputChange);

// // для чекбоксов и радиокнопок используем событие change

// refs.licenseCheckbox.addEventListener("change", onLicenseChange);

// function onInputFocus() {
//   console.log("Инпут получил фокус - событие focus");
// }

// function onInputBlur() {
//   console.log("Инпут потерял фокус - событие blur");
// }

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   refs.nameLabel.textContent = event.currentTarget.value;
// }

// function onLicenseChange() {
//   console.log("сработало");
//   console.log(event.currentTarget.checked);
//   refs.btn.disabled = !event.currentTarget.checked;
// }

// event.crrentTarget в обработчике события - это
// ссылка на элемент, на котром висит слушатель

// события клавиатуры

// const refs = {
//   output: document.querySelector(".js-output"),
//   clearBtn: document.querySelector(".js-clear"),
// };

// window.addEventListener("keypress", onKeypress);
// refs.clearBtn.addEventListener("click", onClearOutput);

// function onKeypress(event) {
//   //   console.log(event);
//   //   console.log("event.key: ", event.key);
//   //   console.log("event.code: ", event.code);

//   refs.output.textContent += event.key;
// }

// // keydowm реагирует на нажатие любой клавиши, включая служебные
// // keypress - кроме служебных, т.е. только на те клавиши, котореы генерят символ
// // key - вводимое значение
// // code - код клавиши, физическая клавиша

// function onClearOutput() {
//   refs.output.textContent = "";
// }

// события мышки
/*
mouseenter и mouseleave - ховер
mouseover и mouseout
mousemove (chatty event - болтливое событие)
*/

// модалка
// открыть и закрыть по кнопке
// закрыть по клику в бэкдроп
// закрыть по ESC
// в CSS есть класс show-modal, который нужно добавить на body при открыти модалки

const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector(".js-backdrop");

// console.log(openModalBtn);
// console.log(closeModalBtn);
// console.log(backdrop);
// console.log(document.body.classList);

openModalBtn.addEventListener("click", onOpenModal);

function onOpenModal() {
  window.addEventListener("keydown", onEscape);
  document.body.classList.add("show-modal");
}

closeModalBtn.addEventListener("click", onCloseModal);

function onCloseModal() {
  window.removeEventListener("keydown", onEscape);
  document.body.classList.remove("show-modal");
}

backdrop.addEventListener("click", onBackDropClick);

function onBackDropClick(event) {
  //   console.log("Клик по бэкдропу");
  //   console.log(event.currentTarget); //где висит слушатель
  //   console.log(event.target); // куда кликнули
  if (event.currentTarget === event.target) {
    // document.body.classList.remove("show-modal");
    onCloseModal();
  }
}

function onEscape(event) {
  const ESC_KEY_CODE = "Escape";
  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}
