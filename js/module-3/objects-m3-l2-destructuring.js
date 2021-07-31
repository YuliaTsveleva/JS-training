const product = {
    title: 'mask',
    price: 100,
    values: ['50ml', '30ml', '100ml'],
}

function showTitle(name) {
    console.log(`this product is ${name}`);
}
 
// showTitle('Parfum');
// console.log(product.title);

// showTitle(product.title);

const products = {
    parfums: {
        male: [
            {
                title: 'Home',
                name: 'Dior',
                price: 2800,
            }
        ],
        female: [{
                title: 'Jadore',
                name: 'Dior',
                price: 2800,
            }],
    },
    masks: {},

}

// console.log(products.parfums.female[0].title);

let title = products.parfums.female[0].title;
// console.log('title', title);

// distructuring
// const { property } = obj
// деструктуризировать свойства можно в любом порядке

const { price, title: productTitle, name } = products.parfums.female[0]
// console.log('productTitle', productTitle);

const { title: myTitle } = product;

// showTitle(myTitle);
// console.log('name: ', name);
// console.log(price);

const { title: maleParfumTitle } = products.parfums.male[0];
// console.log('maleParfumTitle', maleParfumTitle);

const { female, male } = products.parfums;
// console.log(female, male);

const user = {
    login: 'nickname',
    password: 'qwerty',
    userInfo: {
        email: '',
        phone: '',
    }
}

function sayHello(name) {
    alert(`${name} Hello`)
}

const { login } = user;
// sayHello(login)

// деструктуризация массивов
const rgb = [255, 39, 45];
console.log(rgb);

// const [] = array

const [red, , blue] = rgb;
console.log('red:', red);
// console.log('green:', green);
console.log('blue:', blue);



