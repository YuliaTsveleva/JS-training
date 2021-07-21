// Массивы
//  basics
// литерал массива []
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.log(friends);
console.log(friends.length);

console.table(friends); //!!!

// последний индекс = длина - 1
const lastIndex = friends.length - 1;
console.log(lastIndex);

console.log(friends[2]);
console.log(friends[4]);

// переопределение 
friends[1] = 'Apple';
console.table(friends);

/* Примитивы и сложные типы. Передача по ссылке и по значению. 
Ссылочное равенство. */
let a = 10;
let b = a;
console.log(a);
console.log(b);

a = 20;
console.log(a);
console.log(b);

const c = [1, 2, 3];
const d = c;
console.log(c);
console.log(d);

c[0] = 500;
console.log(c);
console.log(d);

console.log(c === d);
console.log([1, 2, 3] === [1, 2, 3]);

/* Перебор (итерация) массива
for - если нужен индекс или нужно изменить элемент массива
for ... of - если индекс не нужен и в массиве ничего менять не надо*/
console.table(friends);

for (let i = 0; i < friends.length; i += 1) {
    friends[i] += '-1';
  
}
console.table(friends);
  
for (const friend of friends) {
    console.log(friend);
}