const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let counter = 0;
for (const number of numbers) {
  counter += number;
}
const sum = counter;
console.log(sum);
}

sumNumbers(numbers);