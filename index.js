// 1. Find the total length of all strings
const stationeryWords = [
  "pen",
  "notebook",
  "eraser",
  "notebook",
  "pencil",
  "notebook",
  "pencil",
];
const totalLength = stationeryWords.reduce((sum, word) => sum + word.length, 0);
console.log(totalLength);

// 2. Find the sum of all even numbers
const numbersArray = [1, 2, 3, 4, 5, 6];
const sumEven = numbersArray.reduce(
  (sum, num) => (num % 2 === 0 ? sum + num : sum),
  0
);
console.log(sumEven);

// 3. Count the number of odd numbers
const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10];
const oddCount = numsArr.reduce(
  (count, num) => (num % 2 !== 0 ? count + 1 : count),
  0
);
console.log(oddCount);

// 4. Count even and odd numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenOddCount = nums.reduce(
  (acc, num) => {
    num % 2 === 0 ? acc.even++ : acc.odd++;
    return acc;
  },
  { even: 0, odd: 0 }
);
console.log(evenOddCount);

// 5. Count positive and negative numbers
const allNumns = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];
const posNegCount = allNumns.reduce(
  (acc, num) => {
    num > 0 ? acc.pos++ : acc.neg++;
    return acc;
  },
  { pos: 0, neg: 0 }
);
console.log(posNegCount);

// 6. Find the product of negative numbers
const numPositive = [-2, 3, 4, 0, -5, 6];
const productNegative = numPositive.reduce(
  (product, num) => (num < 0 ? product * num : product),
  1
);
console.log(productNegative);

// 7. Capitalize all letters of each word and concatenate them
const wordsCaps = ["reduce", "method", "needs", "a", "lot", "of", "practice"];
const capitalizedSentence = wordsCaps
  .reduce((sentence, word) => sentence + " " + word.toUpperCase(), "")
  .trim();
console.log(capitalizedSentence);

// 8. Count positive even numbers and all other numbers
const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];
const posEvenOthers = allNumsArr.reduce(
  (acc, num) => {
    num > 0 && num % 2 === 0 ? acc.posEven++ : acc.others++;
    return acc;
  },
  { posEven: 0, others: 0 }
);
console.log(posEvenOthers);

// 9. Find the sum of all negative odd numbers
const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11];
const sumNegativeOdd = numbersArr.reduce(
  (sum, num) => (num < 0 && num % 2 !== 0 ? sum + num : sum),
  0
);
console.log(sumNegativeOdd);

// 10. Concatenate all letters into a single word
const letters = ["a", "l", "p", "h", "a", "b", "e", "t"];
const word = letters.reduce((concat, letter) => concat + letter, "");
console.log(word);
