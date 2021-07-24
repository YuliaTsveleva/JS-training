/*функциональное выражение
*/

const add = function (x, y) {
    console.log(x);
    console.log(y);

    const result = x + y;
    console.log(`${x}+${y}=${result}`)
    console.log(`выполняется функция add`);

    return result;
}

add(10, 2);

console.log(add(5, 7));

const r1 = add(2, 3);
console.log(`r1; `, r1);

const fn = function () {
    console.log(1);
    return 555;
    console.log(2);
    console.log(3);

}
 
console.log(`результат функции`, fn());

