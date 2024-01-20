// script.js

function manipulateData(inputArray) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  });
}

function filterOddNumbers(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredArray = data.filter((num) => num % 2 === 0);
      resolve(filteredArray);
    }, 1000);
  });
}

function multiplyEvenNumbers(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedArray = data.map((num) => (num % 2 === 0 ? num * 2 : num));
      resolve(multipliedArray);
    }, 2000);
  });
}

function updateOutputElement(result) {
  const outputElement = document.getElementById('output');
  outputElement.textContent = result.join(', ');
}

const inputData = [1, 2, 3, 4];

manipulateData(inputData)
  .then(filterOddNumbers)
  .then(multiplyEvenNumbers)
  .then(updateOutputElement);
