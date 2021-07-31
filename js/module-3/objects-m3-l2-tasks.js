/*Coplfnm объект товара со свойствами name, price, quantity
и ьетодами, которые показывают их текущие значенияб и методами,
изменяющими их значения*/

const product = {
    name: 'prod',
    price: 0,
    quantity: 0,
    showName() {
        console.log(this.name)
    },
    showPrice() {
        console.log(this.price)
    },
    showQuantity() {
        console.log(this.quantity)
    },
    changeName(value) {
        return this.name = value;
    },
    changePrice(value) {
        return this.price = value;
    },
      changeQuantity(value) {
         return this.quantity = value;
    },
    // deleteProp(propName) {
    //       delete(this[propName])
    //    },
    updateQuantity(value, isCost) {
        // 1
        // if (isCost) {
        //       return (this.quantity -= value);   
        // } else {
        // return (this.quantity += value)}
        //  2
        // if (isCost) return (this.quantity -= value)
        // return (this.quantity += value)
        // 3
        isCost ? (this.quantity -= value) : (this.quantity += value)
            }
}

console.log(product)
// product.deleteProp('name');
product.showName();
product.showPrice();
product.showQuantity();
product.changeName('peach');
product.changePrice(55);
product.changeQuantity(3);
product.updateQuantity(1, true);
product.updateQuantity(0.5, false);
console.log(product);


/*Добавь к объекту product метод, который 
высчитывает стоиомсть общего количества 
текущего товара*/

product.getTotalPrice = function () {
    return this.price * this.quantity
}

console.log(product.getTotalPrice());

/* запиши в переменную totalPrice общую 
стоимость всех товаров в массиве products
*/

const products = [
    {name: 'grape', price: 80, quantity: 2},
    {name: 'banana', price: 30, quantity: 5},
    {name: 'kiwi', price: 100, quantity: 1.5},
]

console.log(products)

function getTotalPrice(arr) {
    let totalPrice = 0;
for (let i = 0; i < arr.length; i+=1) {
    console.log(products[i]);
  totalPrice += products[i].price * products[i].quantity;
    }
    console.log('totalPrice', totalPrice);
 }

getTotalPrice(products);

/*
создать функцию, которая принимает массив продуктов, название товара
и его количество и выводит его стоимость, если товара достаточноб или сообщает о том,
что товара нет на складе в указаном количестве*/

const allProducts = [
{ name: 'bread', price: 20, quantity: 100 },
{ name: 'milk 2,5%', price: 30, quantity: 24 },
{ name: 'cheeze', price: 300, quantity: 10 },
{ name: 'chorizo', price: 560, quantity: 4 },
{ name: 'lemon', price: 60, quantity: 9 },
{ name: 'lavazza', price: 250, quantity: 24 },
]

console.log(allProducts);

function getResponse(arr, prod, count) {
    console.log(arr);
    for (let product of arr) {
        console.log(product.name)
        // проверяем есть ли желаемый товар в массиве продуктов
        // 1
        // if (product.name === prod) {
        //     console.log(`${prod} есть на складе`)
        //     if (product.quantity >= count) {
        //         let cost = product.price * count;
        //         console.log(`Можете купить ${prod} за ${cost}`);
              
        //     } else {
        //         console.log(`${prod} нет в достаточном количестве`)
        //     }
        // } else {
        //     console.log(`${prod} отсутсвует на складе`)
        // }
        // 2
        const { name, quantity, price } = product;
            if (name === prod) {
                // console.log(`${prod} есть на складе`)
                return quantity >= count
                    ? console.log(`Можете купить ${prod} за ${price * count}`)
                    : console.log(`${prod} нет в достаточном количестве`)
            } 
            }
 console.log(`${prod} отсутсвует на складе`)
 }

getResponse(allProducts, 'lavazza', 5)

