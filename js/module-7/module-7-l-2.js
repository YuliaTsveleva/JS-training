// слушатель событий

window.addEventListener("click", callback);

function callback(params) {
  console.log("click случился");
}

// самые распространенные события
// с формой: submit (при Enter || button.type="submit")
// input - болтливое событие ввода данных
// change
// клавиатура: keydown, keypress, keyup
// click
// focus & blur

const form = document.querySelector(".form");
console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault(); //останавливаем дефолтную отправку формы
  console.log(`Отправка формы произошла`, event);
  //   console.log(event.target.children.firstInput.value);
  //   console.log(event.target.children.secondInput.value);
  //   console.log(event.target.elements.firstInput.value);
  //   console.log(event.target.elements.secondInput.value);
});

form.addEventListener("input", (evt) => {
  //   console.log(evt.target.value);
});

form.addEventListener("change", (e) => {
  console.log(`change`, e.target.value);
});

const firstInput = document.querySelector('[name="firstInput"]');

firstInput.addEventListener("focus", (e) => {
  console.log(`focus`, e.target.value);
});

firstInput.addEventListener("blur", (e) => {
  console.log(`blur`, e.target.value);
});

// coбытия клавиатуры
// вешаем слушатель на window
window.addEventListener("keydown", (e) => {
  console.log("keydown", e.code, e.key);
});

window.addEventListener("keypress", (e) => {
  console.log("keypress", e.code, e.key);
});

window.addEventListener("keyup", (e) => {
  console.log("keyup", e.code, e.key);
});

// у системных клавиш нет события keypress
// e.code - стандартизированное имя клавиши
// e.key - значение клавиши согласно языковой разметке

// click
form.addEventListener("click", (e) => {
  console.log(e);
});

const decBtn = document.getElementById("dec");
const incBtn = document.getElementById("inc");
const counter = document.getElementById("count");

function getCounter() {
  let count = 0;
  function inc() {
    return (count += 1);
  }
  function dec() {
    return (count -= 1);
  }
  return { dec, inc };
}

const c = getCounter();
console.log(c);
decBtn.addEventListener("click", () => {});

decBtn.addEventListener("click", () => {
  console.log("проверка связи");
  let result = c.dec();
  console.log(result);
  counter.textContent = result;
});

incBtn.addEventListener("click", () => {
  console.log("проверка связи");
  let result = c.inc();
  console.log(result);
  counter.textContent = result;
});

// elem.addEventListener('click', callback)
// elem.removeEventListener('click', callback)
