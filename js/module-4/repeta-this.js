// контекст (this)
// где и как была объявлена функция, не имеет никакого влияния на контекст
// контекст определяется в момент вызова функции, если он не привязан

// как метод объекта - в контексте объекта

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag => this', this);
//     },
// };

// user.showTag();

// Вызов без контекста
// В строгом режиме undefined
// в нестрогом режиме window (если убрать type='module')

// const foo = function () {
//     console.log('foo => this', this);
// };

// foo();

// как метод объекта, но объявлена как внешняя функция
// в контексте объекта

// const showTag = function () {
//     console.log('showTag => this', this);
//     console.log('showTag => this.tag', this.tag);
// };

// // showTag()
// const user = {
//     tag: 'Mango',
// };
    
// user.showUserTag = showTag;

// console.log(user);

// user.showUserTag()

// Вызов без контекста, но объявленный как метод объекта

const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag => this', this);
        console.log('showTag => this.tag', this.tag);
    },
};

user.showTag();

const outerShowTag = user.showTag;

// outerShowTag(); //undefined

const invokeAction = function (action) {
    console.log(action);
    action()
}
 
// invokeAction(user.showTag)

// examples
const fn = function () {
    console.log('fn => this', this);
};

fn()