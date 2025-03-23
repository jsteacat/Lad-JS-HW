let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log("Получившееся число:", n); // 31.25
console.log("Количество итераций:", num); // 5
