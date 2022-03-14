function convertToRoman(num) {
 
    //This converts the number to a string and then to a comma-separated list of characters
    let arr = num.toString().split("");
    //Let's break down the number into units, tens, hundreds, thousands...
    let iNum = arr.pop();
    let xNum = arr.pop();
    let cNum = arr.pop();
    let mNum = arr.pop();

    if (iNum < 4) {
        iNum = "I".repeat(iNum.valueOf()); //Here the possible results will be: Ix1 = I, Ix2 = II, Ix3 = III
    } else if (iNum == 4) {
        iNum = "I" + "V" // I+V = IV
    } else if (iNum > 4 && iNum < 9) { 
        iNum = "V" + "I".repeat(iNum.valueOf() - 5)//V, VI, VII, VIII
    } else if (iNum == 9) {
        iNum = "I" + "X" // IX
    } else {
        iNum = ""
    }

    if (xNum < 4) {
        xNum = "X".repeat(xNum.valueOf());
    } else if (xNum == 4) {
        xNum = "X" + "L"
    } else if (xNum > 4 && xNum < 9) {
        xNum = "L" + "X".repeat(xNum.valueOf() - 5)
    } else if (xNum == 9){
        xNum = "X" + "C"
    } else {
        xNum = ""
    }

    if (cNum < 4) {
        cNum = "C".repeat(cNum.valueOf());
    } else if (cNum == 4) {
        cNum = "C" + "D"
    } else if (cNum > 4 && cNum < 9) {
        cNum = "D" + "C".repeat(cNum.valueOf() - 5)
    } else if (cNum == 9){
        cNum = "C" + "M"
    } else {
        cNum = ""
    }

    if (mNum < 9) {
        mNum = "M".repeat(mNum.valueOf());
    } else {
         mNum = ""
    }

  return mNum + cNum + xNum + iNum // Let's concatenate the characters
  
}

console.log(convertToRoman(73));


