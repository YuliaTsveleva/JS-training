// Дана строка; нужно написать функцию, которая позволяет
// вернуть значение true, если строка является
// палиндромом, и false — если нет.

// function isPalindrom(string) {
//   const stringInLowerCase = string.toLowerCase();
//   const arr = stringInLowerCase.split("");
//   const arrReversed = arr.reverse();
//   const newString = arrReversed.join("");
//   if (stringInLowerCase === newString) {
//     return true;
//   } else return false;
// }

// console.log(isPalindrom("anna"));
// console.log(isPalindrom("Anna"));
// console.log(isPalindrom("yulia"));

// Напиши класс Storage, который будет создавать объекты для
// управления складом товаров.
// При вызове будет получать один аргумент - начальный массив
// товаров,
// и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к
// текущим
// removeItem(item) - получет товар и, если он есть, удаляет
// его из текущих

// class Storage {
//   constructor(array) {
//     this.items = array;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     return this.items.push(item);
//   }
//   // removeItem(itemName) {
//   //     if (this.items.forEach ("itemName")) {
//   //         return this.items.splice(this.items.indexOf(item), 1)
//   //     }
//   // }

//   removeItem(itemName) {
//     const isExist = this.items.find((item) => item.name === itemName);

//     if (isExist) {
//       return this.items.splice(this.items.indexOf(isExist), 1);
//     }
//   }

//   getOneItem(itemName) {
//     const itemFounded = this.items.find((item) => item.name === itemName);
//     return itemFounded ? itemFounded : `Нет такого товара`;
//   }

//   clearItems() {
//     return (this.items = []);
//   }
// }

// const example = [
//   { name: "Нанитоиды", price: 100 },
//   { name: "Пролонгер", price: 200 },
//   { name: "Антигравитатор", price: 300 },
// ];

// const storage = new Storage(example);

// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem({ name: "Дроид", price: 150 });
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// console.log(storage.getOneItem("Дроид"));
// console.log(storage.clearItems());

//
// Напиши класс StringBuilder. На вход он получает один параметр
// - строку,
// которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет
// ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет
// ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет
// ее в начало и в конец _value

// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value = `${this._value} ${str}`;
//   }

//   prepend(str) {
//     this._value = `${str} + ${this._value}`;
//   }

//   pad(str) {
//     this._value = `${str} + ${this._value} + ${str}`;
//   }
// }

// const string = new StringBuilder("Masha");

// string.append("30");

// console.log(string.value);

//
class Car {
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor({ speed, price, maxSpeed, isOn, distance } = config) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = 0;
  }

  /*
   * Добавь метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  getSpecs(car) {
    console.log(`maxSpeed - ${car.maxSpeed}, speed - ${car.speed}, 
    isOn - ${car.isOn}, dictance - ${car.distance}, price - ${car.price}`);
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
  }
  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if ((this.speed += value) <= this.maxSpeed) {
      this.speed + value;
    } else {
      this.speed = this.maxSpeed;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    } else {
      this.speed = 0;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const linc = new Car({
  speed: 0,
  price: 20000,
  maxSpeed: 200,
  isOn: false,
  distance: 0,
});

console.log(linc);
console.log(linc.price);
linc.getSpecs(linc);
linc.turnOn();
linc.getSpecs(linc);
linc.accelerate(100);
linc.getSpecs(linc);
linc.decelerate(80);
linc.getSpecs(linc);
linc.drive(6);
linc.getSpecs(linc);
linc.decelerate(20);
linc.turnOff();
linc.price = 25000;
linc.getSpecs(linc);
