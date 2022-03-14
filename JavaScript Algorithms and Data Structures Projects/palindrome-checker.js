const numbers = [1, 2, 3, 4];
let doubled = [];

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log(doubled)



/*function palindrome(str) {

  let myRegex = /[a-z0-9]/ig;
  let result = str.match(myRegex);
  let str1 = result.toString().toLowerCase();
  let str2 = result.reverse().toString().toLowerCase();

  if (str1 == str2) {
    return true;
  } else {
    return false
  }

};

console.log(palindrome("1 eye for of 1 eye."));*/

function appenSummOfValues(original) {
  const sumItems = original.reduce((accumulator, currentValue) => accumulator + currentValue);
  original.push(sumItems)
  return original;

};

const original = [3, 2]
console.log(appendSumOfValues(original));