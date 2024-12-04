// Task 1
const logItems = function (...array) {
  let message;
  for (let i = 0; i < array.length; i += 1) {
    const number = i + 1;
    const name = array[i];
    message = `${number} - ${name}`;
    console.log(message);
  }
  return message;
};

logItems("Mango", "Poly", "Ajax");

//   Task 2

const calculateEngravingPrice = function (message, pricePerWord) {
  const wordArray = message.split(" ");
  let sumOfWords = wordArray.length;
  const totalPrice = sumOfWords * pricePerWord;
  return `Вартість гравіювання "${message}" коштує ${totalPrice}грн`;
};

const message = prompt("Введіть те, що хочете загравіювати");
console.log(calculateEngravingPrice(message, 100));

//   Task 3

const findLongestWord = function (string) {
  const anyWords = string.split(" ");
  let theLongestWorld = "";
  for (const word of anyWords) {
    if (theLongestWorld.length < word.length) {
      theLongestWorld = word;
    } else {
      continue;
    }
  }
  return `Найдовше слово - ${theLongestWorld}`;
};

const words = prompt("Будь ласка, введіть пару слів");
console.log(findLongestWord(words));

//   Task 4
//   я трохи зменшив обмеження,
//  і тепер якщо в рядку більше 20 символів, то він обрізається,
//   бо 40 символів це дуже багато:)

const formatString = function (string) {
    if (string.length > 20) {
    return string.slice(0, 20) + '...';
    } else {
      return string;
    }
  };
  
  const textMessage = prompt("Введіть будь-який текст");
  console.log(formatString(textMessage));

//   Task 5

const checkForSpam = function (message) {
    const messageSmall = message.toLowerCase();
    const wordsArray = messageSmall.split(" ");
    for (const word of wordsArray) {
      if ("spam" === word || "sale" === word) {
        return true;
      } else {
        continue;
      }
    }
    return false;
  };
  
  const finalText = prompt("Введіть текст");
  console.log(checkForSpam(finalText));

//   Task 6

const numbers = [];
const addNumbers = function (number) {
  if (isNaN(number)) {
    return "В рядку не знайдено ні одного числа, введіть число.";
  }
  number = Number(number);
  numbers.push(number);
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
};

let input;
do {
  input = prompt("Введіть число");
  console.log(addNumbers(input));
} while (input !== null);
// :):):)