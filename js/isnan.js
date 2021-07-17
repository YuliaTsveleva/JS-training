// isNan() - проверка значения на "не число"
// если не число - true
// если число - false

// example
console.log(isNaN());
console.log(isNaN(0));
console.log(isNaN(100));
console.log(isNaN(NaN));
console.log(isNaN(Infinity));
console.log(isNaN('0'));
// метод пытается преобразовать значение к числу, и если получилось, то возвращает false

console.log(isNaN(0.4));
console.log(isNaN('NaN'));
console.log(isNaN(true));
console.log(isNaN(false));
// булевые true И false преобразуются в 1 и 0, поэтому не проходят проверку на "не число"

console.log(isNaN('true'));
console.log(isNaN('false'));
// строчные true и false проходят проверку на "не число", так как преобразуются в NaN, происходит преобразование строки к числу, а не строки к булю, а потом к числу

console.log(isNaN('Infinity'));

console.log(isNaN('0.4'));
console.log(isNaN('0,4'));
// true из-за запятой


