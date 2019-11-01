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
  let shifted = arr[0];

  for (let i = 0; i < arr.length - 1; i += 1) {
    arr[i] = arr[i + 1];
  }
  arr.length -= 1;

  return shifted;
};

// Question 9
const lastIndexOf = function() {

};

// Question 10
const slice = function(arr, start = 0, end = arr.length) {
  let sliced = [];

  for (let i = start; i < end; i += 1) {
    push(sliced, arr[i]);
  }

  return sliced;
};

// Question 11
const splice = function(arr, start, deleteCount) {
  let cutValues = slice(arr, start, start + deleteCount);
  
  for (let i = start; i < arr.length; i += 1) {
    arr[i] = arr[i + deleteCount];
  }

  arr.length = arr.length - deleteCount;
  return cutValues;
};


// Question 12
const spliceForReal = function(arr, start, deleteCount, ...newItems) {
  let cutValues = slice(arr, start, start + deleteCount);

  splice(arr, start, deleteCount);
  let rhs = slice(arr, start);
  arr.length = start;

  for (let i = 0; i < newItems.length; i += ) {
    push(arr, newItems[i]);
  }
  for (let i = 0; i < rhs.length; i += ) {
    push(arr, rhs[i]);
  }
  return cutValues;
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
