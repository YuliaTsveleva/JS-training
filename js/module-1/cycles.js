// Циклы
// while (condition) {statement} 
// цикл while - до тех пор пока условие верно, тело будет выполняться
// do {statement} while (condition)
// цикл do while  сначала делает, потом думает, т.е. сначала выполнятеся действие, потом проверятеся условие, т.е. тело выполнится хотя бы один раз даже если условие не выполнится
// в цикле происходит повторение какого-либо набора действий до тех пор, пок ане выполнится условие выхода из цикла,  наче цикл будет повторяться бесконечно
// циклы while... и do ... while ... используются нечасто

const max = 10;
let y = 10;
let i = 0;

while (y < max) {
    y += 1;
    i += 1;
    console.log(`Итерация ${i}:`, y);
}
 
do {y += 1;
    i += 1;
    console.log(`Итерация ${i}:`, y);
}  while (y < max)

// цикл For - цикл со счетчиком
// local i, j, k
// for (старт; условие до; шаг итерации)
for (let i = 1; i <= 10; i += 2){
    console.log(`${i}`)
}

// i=i+1 === i+=1 === i++

// break - выбрасывает из цикла полностью
// continue - прерывает текущую итерацию и переходит к следующей
for (let i = 0; i <= 10; i += 1){
       if (i % 2 === 0) {
        console.log(`continue ${i}`)
        continue
    }
}

for (let i = 3; i <= 10; i += 1){
       if (i % 2 === 0) {
        console.log(`break ${i}`)
        break
    }
}

