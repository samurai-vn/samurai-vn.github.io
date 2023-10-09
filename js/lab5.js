"use strict"
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

function maxOfThree(num1, num2, num3) {
    let max = num1 > num2 ? num1 : num2;
    max = num3 > max ? num3 : max;
    return max;
}

function isVowel(aChar) {
    switch (aChar) {
        case 'u':
        case 'U':
        case 'e':
        case 'E':
        case 'o':
        case 'O':
        case 'a':
        case 'A':
        case 'i':
        case 'I':
            return true;
        default:
            return false;
    }
}

function sum(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

function mutiply(arr) {
    let total = 1;
    arr.forEach(element => {
        total *= element;
    });
    return total;
}

function reverse(str) {
    var splitStr = str.split("");
    var reverseArr = splitStr.reverse();
    return reverseArr.join("");
}

function findLongestWordLength(arr) {
    var longestW = arr[0];
    arr.forEach(element => {
        longestW = element.length > longestW.length ? element : longestW;
    });
    return longestW;
}

function filterLongWords(num, arr) {
    var retArr = [];
    var i = 0;
    arr.forEach(element => {
        if (element.length > num) {
            retArr[i++] = element;
        }
    });
    return retArr;
}

function computeSumOfSwares(arr) {
    var ret = 0;
    arr.forEach(e => {
        ret += e * e;
    });
    return ret;
}

function printOddNumbersOnly(arr) {
    arr.forEach(e => {
        if (e % 2 !== 0)
            console.log(e);
    });
}

function computeSumOfSquaresOfEvensOnly(arr) {
    var ret = 0;
    arr.forEach(e => {
        if(e % 2 === 0)
        ret += e*e;
    });
    return ret;
}
function sumUsingReduce(arr) {

    return arr.reduce((sum, cur)=>sum+cur,0);
}
function multiplyUsingReduce(arr) {
    return arr.reduce((sum, cur)=>sum*cur,1);
}

function printFibo(n, a, b) {
    console.log (a);
    if(n > 1) console.log(b);
    let fibo;
    for(let i = 2; i < n; i++)
    {
        fibo = a + b;
        console.log(fibo);
        a = b;
        b = fibo;
    }
}

// part 2
function mySort(arr) {
    let ret = arr.sort((a, b)=>{return a===b ? 0 : (a > b ? 1 : -1)});
    return ret;
}

function printMatrix() {
    let myJMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    myJMatrix.forEach(arr=>arr.forEach(e=>console.log(e)));
}


//test
// console.log(mySort(10, 0, 1));
printMatrix();