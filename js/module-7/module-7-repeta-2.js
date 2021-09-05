// события
// создание и удаление событий
// объект события
// поведение по умолчанию
// основные события мыши, форм, клавиатуры
// [список всех доступных событий](https://developer.mozilla.org/en-US/docs/web/Events)

const targetBtn = document.querySelector(".js-target-btn");
const addListener = document.querySelector(".js-add-listener");
const removeListener = document.querySelector(".js-remove-listener");

targetBtn.addEventListener("click", () => {
  console.log("Клик");
}); //тип события в виде строки, callback

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

addListener.addEventListener("click", (event) => {
  console.log(event);
  console.log("вешаю слушателя событий на целевую кнопку");
  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeListener.addEventListener("click", (event) => {
  console.log("снимаю слушатель с целевой кнопки");
  targetBtn.removeEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log("Клик по целевой кнопкe");
}

// ссылочная идентичность колбеков - выносить во внешние функции (иначе при отписке анонимки пройдут как две разные)

function logMessage() {
  console.log("Клик по целевой кнопкe");
}

// форма

const form = document.querySelector(".js-register-form");
console.log(form);
