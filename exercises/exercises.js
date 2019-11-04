// Question 1 takes an array of items as an argument and logs all the items to the console
const shoutout = function(input) {
  // for (let i = 0; i < input.length; i ++ ) {
  //   console.log(input[i]);
  // }
};

// Question 2
const reverseArray = function(arrayIn) { //Gave me lots of trouble to do with for loop, will try again later!
  let arrayOut = [];
  let counter = arrayIn.length - 1;
  while (arrayOut.length < arrayIn.length) {
    arrayOut.push(arrayIn[counter]);
    counter --;
  }
  return arrayOut;
};

// Question 3
const indexOf = function(arrayIn, valueIn) {
  let indexBag;
  for (let i = 0; i < arrayIn.length; i ++) {
    if (valueIn == arrayIn[i]) {
      indexBag = i;
      break;
    } else {
      indexBag = -1;
    }
  }
  return indexBag;
};

// Question 4
const join = function (arrayIn, separator = ',') {
  let finalString = '';
  for (var i = 0; i < arrayIn.length - 1; i ++) {
    finalString += arrayIn[i];
    finalString += separator;
  } 
  finalString += arrayIn[i];
  return finalString;
};

// Question 5
const push = function(arrayIn, value) {
  arrayIn[arrayIn.length] = value;
  return arrayIn.length;
};

// Question 6
const pop = function(arrayIn) { //pop last element of array and return the element 
  let poppedVal;
  poppedVal = arrayIn[arrayIn.length - 1];
  arrayIn.length = arrayIn.length - 1;
  return poppedVal;
};

// Question 7
const unshift = function(arrayIn, valueIn) {
  for (let i = arrayIn.length - 1; i >= 0; i --) {
    arrayIn[i + 1] = arrayIn[i];
  }
  arrayIn[0] = valueIn;
  return arrayIn.length;
}

// Question 8
const shift = function(arrayIn) {
  let rememberFirstVal = arrayIn[0];
  //arrayIn = reverseArray(arrayIn);
  //arrayIn.length --;
  //arrayIn = reverseArray(arrayIn);
  for (let i = 0; i < arrayIn.length; i ++) {
    arrayIn[i] = arrayIn[i + 1];
  }
  arrayIn.length --; 
  return rememberFirstVal;
};

// Question 9
const lastIndexOf = function(arrayIn, valueIn) {
  let indexBag;
  for (let i = arrayIn.length - 1; i >= 0; i --) {
    if (valueIn == arrayIn[i]) {
      indexBag = i;
      break;
    } else {
      indexBag = -1;
    }
  }
  return indexBag;
};

// Question 10
const slice = function(arrayIn, startingIndex = -1, endIndex = -1) {
  let newArray = [];
  if (startingIndex === -1 && endIndex === -1) { //2ND & 3RD argument missing
    //return copy
    for (let i = 0; i < arrayIn.length; i ++) {
      newArray.push(arrayIn[i]); //pushing here since I wrote it before
    }
  } else if (endIndex === -1) { //3RD argument missing
    //return array from startingIndex
    for (let i = startingIndex; i < arrayIn.length; i ++) {
      newArray.push(arrayIn[i]);
    }
  } else { //Thank you friendly user
    //expected functionality
    for (let i = startingIndex; i < endIndex; i ++) {
      newArray.push(arrayIn[i]);
    } 
  }
  return newArray;
};

// Question 11
const splice = function (arrayIn, startingIndex, delAmnt) {
  let newArray = [];
  for (let i = startingIndex; i <= delAmnt; i++) {
    arrayIn[arrayIn.length] = arrayIn[i];
    push(newArray, pop(arrayIn));
    pop(arrayIn);
  }
  console.log(arrayIn);
  return newArray;
};

splice([1, 2, 3, 4], 1, 2);

// Question 12
const spliceForReal = function(arrayIn, startingIndex, delAmnt, ...inserts) {
  arrayIn.splice(startingIndex, delAmnt);
  // let rightOfCut = arrayIn.slice(1);
  arrayIn.l += inserts.length;
  for (let i = arrayIn.length - 1; i < 0; i --) {
    arrayIn[i] = arrayIn[i + 3];
  }
  for (let i = 0; i < inserts.length; i ++) {
    arrayIn[startingIndex + i] = inserts[i];
  }
};

// Question 13
const concat = function() {

};

// Question 14
const shallowCompare = function() {

};

// Question 15
const deepCompare = function() {

};

shoutout();

// Write all your code ABOVE this line
module.exports = {
  reverseArray,
  indexOf,
  join,
  push,
  pop,
  unshift,
  shift,
  lastIndexOf,
  slice,
  splice,
  spliceForReal,
  concat,
  shallowCompare,
  deepCompare,
};
