/*
1.
const values = [5, 0, -3, 2];

values.forEach(a => {
    if (a > 0 && a < 5) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
});
// false, false, false, true

2.
const values = [5, 0, -3, 2];

values.forEach(a => {
    if (a === 0 || a === 2) {
        a += 7;
    } else {
        a /= 10;
    }
    console.log(a);
});
// 0.5, 7, -0.3, 9

3.
const testValues = [
    { a: 1, b: 3 },
    { a: 0, b: 6 },
    { a: 3, b: 5 }
];

testValues.forEach(({ a, b }) => {
    if (a <= 1 && b >= 3) {
        console.log(a + b);
    } else {
        console.log(a - b);
    }
});
// 4, -6, -2

4.
const testValues = [
    { a: 3, b: 5 },
    { a: 1, b: 7 },
    { a: 8, b: 12 },
    { a: 12, b: 15 },
];

testValues.forEach(({ a, b }) => {
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
});
// true, true, true, false
*/
