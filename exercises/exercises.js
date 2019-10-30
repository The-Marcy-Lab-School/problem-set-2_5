// // Question 1
const shoutOut = function(items){
  for (let i =0; i < items.length; i += 1){
    console.log(items[i]);
  }
}
shoutOut([2, 5]);

// Question 2
const reverseArray = function(contents){
  let newContents=[];
  for (let i = contents.length - 1 ; i >= 0; i -= 1){ 
      newContents.push(contents[i]);
      
   } 
  return newContents;
}



reverseArray([1,2,3,4]);

// Question 3
const fam = ['paul','mom','dad','cat'];
const indexOf = function(array, value){
  for (let i = 0; i < array.length; i +=1){
    if (array[i] === value){
      return i;
    }
  } 
  return -1;
};

// indexOf();

// Question 4
const join = function() {

};

// Question 5
const push = function() {

};

// Question 6
const pop = function() {

};

// Question 7
const unshift = function() {

};

// Question 8
const shift = function() {

};

// Question 9
const lastIndexOf = function() {

};

// Question 10
const slice = function() {

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
const shallowCompare = function() {

};

// Question 15
const deepCompare = function() {

};



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
