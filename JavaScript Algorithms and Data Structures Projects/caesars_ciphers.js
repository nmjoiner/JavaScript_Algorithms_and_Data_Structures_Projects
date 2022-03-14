/**
*@fileoverview Caesar Cipher
*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
*In a shift cipher the meanings of the letters are shifted by some set amount.

*A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
*Thus A ↔ N, B ↔ O and so on.

*Write a function which takes a ROT13 encoded string as input and returns a decoded string.

*All letters will be uppercase. 
*Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
  return str.replace(/[A-Z]/g, function (str) {
    for (let i = 0; i < str.length; i++) {
      str[i].codePointAt() + 13 <= 90 ? str = (str[i].codePointAt() + 13) : str = (str[i].codePointAt() - 13)
    }
    return String.fromCharCode(str)
  })
}
console.log(rot13("SERR PBQR PNZC"));


// function rot13(str) {
//   return str.replace(/[A-Z]/g, function (str) {
//     for (let i = 0; i < str.length; i++) {
//       return String.fromCharCode(str[i].codePointAt() + 13 <= 90 ? str = (str[i].codePointAt() + 13) : str = (str[i].codePointAt() - 13))
//     }
//   })
// }
// console.log(rot13("SERR PBQR PNZC"));

/*********************************************** */

// function rot13(str) {
// 	return str.replace(/[A-Z]/g, function (code) {
// 		return String.fromCharCode((code <= 'Z' ? 90 : 122) >= (code = code.charCodeAt(0) + 13) ? code : code - 26);
// 	});
// }
// console.log(rot13("SERR YBIR!"));

//************************************************ */

// function rot13(str) {
//   return str.replace(/[A-Z]/g, function (str) {
//   for (let i = 0; i < str.length; i++) {
//    if (str[i].codePointAt() + 13 <= 90) {
//      str=(str[i].codePointAt() + 13)
//    } else {
//      if (str[i].codePointAt()) {
//        str=(str[i].codePointAt() - 13)
//      }
//    }
//  }
//  return String.fromCharCode(str)
//  })
//  }
//   console.log(rot13("SERR PBQR PNZC"));