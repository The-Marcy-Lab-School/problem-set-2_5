// Question 1
const shoutout = function() {
  
};

// Question 2
const reverseArray = function(arr) {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    reversedArray[reversedArray.length] = arr[i];
  }
  return reversedArray;
};

// Question 3
const indexOf = function(arr, item) {
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      return i;
    }
  }

  return -1;
};

// Question 4
const join = function() {

};

// Question 5
const push = function(arr, item) {
  arr[arr.length] = item;
  return arr.length;
};

// Question 6
const pop = function() {

};

// Question 7
const unshift = function() {

};

// Question 8
const shift = function(arr) {
};

// Question 9
const lastIndexOf = function() {

};

// Question 10
const slice = function(arr, start = 0, end = arr.length) {
  let slicedArray = [];

  for(let i = start; i < end; i += 1) {
    push(slicedArray, arr[i]);
  }

  return slicedArray;
};

// Question 11
const splice = function() {
};


// Question 12
const spliceForReal = function() {
};

// Question 13
const concat = function() {

};

// Question 14
const shallowCompare = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// Question 15
const deepCompare = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (Array.isArray(arr1[i])) {
      if (!shallowCompare(arr1[i], arr2[i])) return false;
    } else {
      if (arr1[i] !== arr2[i]) return false;
    }
  }

  return true;
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
