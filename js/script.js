const a = +prompt("Введите, пожалуйста, число");



// 1
a === 0 ? (alert( "Верно" )) : (alert( "Неверно" ));

//2

a > 0 ? (alert( "Верно" )) : (alert( "Неверно" ));

//3

a < 0 ? (alert( "Верно" )) : (alert( "Неверно" ));

//4

a >= 0 ? (alert( "Верно" )) : (alert( "Неверно" ));

//5

a <= 0 ? (alert( "Верно" )) : (alert( "Неверно" ));

//6

a !== 0 ? (alert( "Верно" )) : (alert( "Неверно" ));

//7

a === "test" ? (alert( "Верно" )) : (alert( "Неверно" ));

//8

a === 1 ? (alert( "Верно" )) : (alert( "Неверно" ));

//9

a > 0 && a < 5 ? (alert( "Верно" )) : (alert( "Неверно" ));

//10

if (a === 0 || a === 2) {
    a += 7;
} else {
a /= 10;
}
alert(a);

//11

let b;
if (a <= 1 && b >= 3) {
const sum = a + b;
alert (sum);
} else {
    const sub = a - b;
    alert (sub);
}

//12

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
alert( "Верно" );
} else {
    alert( "Неверно" );
}

//13
let num;
let result;
switch (num) {
    case 1:
        result = "зима";
        break;
    case 2:
        result = "весна";
        break;
    case 3:
        result = "лето";
        break;
    case 4:
        result = "осень";
        break;
    default: 
        alert("Нет таких значений");
}
