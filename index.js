// 1.
function square(number) {
  return number * number;
}

// 2.
function sum(a, b) {
  return a + b;
}

// 3.
function subtractAndDivide(a, b, c) {
  return (a - b) / c;
}

// 4.
function weekDay(number) {
  const days = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье"
  };
  
  return days[number] || "Некорректный номер, введите число от 1 до 7";
}

// 5.
function compareNumbers(number1, number2) {
  return number1 === number2;
}

// 6.
function isSumGreaterThanTen(number1, number2) {
  return (number1 + number2) > 10;
}

// 7.
function isNegative(number) {
  return number < 0;
}

// 8.
function isNumberInRange(number) {
  return number > 0 && number < 10;
}

// 9.
function getDigitsSum(number) {
  return String(Math.abs(number))
    .split('')
    .map(Number)
    .reduce((acc, digit) => acc + digit, 0);
}

// 10.
function findYearsWithDigitSum(targetSum) {
  const result = [];
  for (let year = 1; year <= 2020; year++) {
    if (getDigitsSum(year) === targetSum) {
      result.push(year);
    }
  }
  return result;
}

// 11.
function isEven(number) {
  return number % 2 === 0;
}

// 12.
function getSingleDigitSum(number) {
  let sum = number;
  
  while (sum > 9) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  
  return sum;
}

// 13.
const isPalindrome = str => {
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalizedStr === normalizedStr.split('').reverse().join('');
};






