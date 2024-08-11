const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let counter = 0
  for (const number of numbers) {
   counter += number; 
  }
  const average = counter / numbers.length;
  console.log(average);
}

average(numbers);