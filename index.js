// 1.
// const strings = ["hello", "world", "JavaScript"];
// const lengths = strings.map(str => str.length);

// 2.
// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
//
// function currentSums(numbers) {
//   return numbers.reduce((acc, curr, index) => {
//     acc[index] = (acc[index - 1] || 0) + curr;
//     return acc;
//   }, []);
// }
//
// const sums = currentSums(numbers);

// 3.
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
// const pairs = [];
//
// for (let i = 0; i <= 7; i++) {
//   if (numbers.includes(7 - i)) {
//     pairs.push(`${i}:${7 - i}`);
//   }
// }

// 4.
// const str = "hello world";
// const firstLetters = str.split(" ").map(word => word[0]);

// 5.
// const str = "hello";
// const substrings = [];
//
// for (let i = 0; i < str.length; i++) {
//   const start = Math.max(0, i - 1);
//   const end = Math.min(str.length, i + 2);
//   substrings.push(str.substring(start, end));
// }

// 6.
// const digits = [3, 5, 1, 4, 2];
// const sortedDigits = digits.sort((a, b) => b - a);

// 7.
// const arr1 = [3, 1, 4];
// const arr2 = [2, 5];
// const arr3 = [9, 0];
//
// const combinedArray = arr1.concat(arr2, arr3).sort((a, b) => b - a);

// 8.
// const matrix = [[1, 2, 3], [4, 5], [6]];
// const sum = matrix.flat().reduce((acc, curr) => acc + curr, 0);

// 9.
// const numbers = [1, 2, 3, 4, 5];
// const reversed = [];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   reversed.push(numbers[i]);
// }

// 10.
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// let count = 0;
//
// for (let num of numbers) {
//   sum += num;
//   count++;
//   if (sum > 10) break;
// }

// 11.
// function arrayFill(value, count) {
//   return Array(count).fill(value);
// }
//
// const filledArray = arrayFill('x', 5);
