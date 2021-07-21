// ветвления
// 1 - если
// if (condition) {
//     statement
// }

// 2 - если и все остальные случаи
// if (condition) {
//     statement
//   } else {
//     statement
//   }

// 3 - множественные условия
// // if (condition) {
//     statement
//   } else if {
//     statement
//   } else {
//     statement
//   }

// example
let a = 5;
if (a > 0 && a <= 5) {
    console.log(`0-5`)
} else if (a > 5 && a <= 10) {
    console.log(`5-10`)
} else if (a > 10 && a <= 15) {
    console.log(`10-15`)
} else {
    console.log(`>15`)
}

// Альтернатива if...else... - тернарный оператор
// (condition) ? true : false

// example

let age = 12;

if (age >= 18) {
    console.log(`adult`)
} else {
    console.log(`child`)
}

age >= 18 ? console.log(`adult`) : console.log(`child`);

// Альтернатива множественному ветвлению - оператор switch
let day = "sun";

// full example
switch (day) {
    case "mon":
        console.log(`${day} - будний день`)
            break
    case "tue":
        console.log(`${day} - будний день`)
            break
    case "wen":
        console.log(`${day} - будний день`)
            break
    case "thu":
        console.log(`${day} - будний день`)
            break
    case "fri":
        console.log(`${day} - будний день`)
            break
    default: 
        console.log(`${day} - выходной день`)
 }

//  short example
switch (day) {
    case "mon":
    case "tue":
    case "wen":
    case "thu":
    case "fri":
        console.log(`${day} - будний день`)
            break
    default: 
        console.log(`${day} - выходной день`)
}
 
// example 
a = 2
console.log(a)

switch (!!a) {
    case a > 0 && a <= 5:
        console.log(`0-5`)
        break
    case a > 5 && a <= 10:
        console.log(`5-10`)
        break
    case a > 10 && a <= 15:
        console.log(`10-15`)
        break
    default:
        console.log(`> 15`)
}
