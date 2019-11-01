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
const join = function (array, separator = ','){
  let word = '';
  for (let i = 0; i < array.length; i += 1){
    word = word + array[i];
    if(i < array.length - 1){
      word = word + separator;
    }    
  }
  return word;
}

// Question 5
const push = function (array, value){
  array[array.length] = value
  return array.length
}

// Question 6
const pop = function(array){
 let popOff = array[array.length - 1]
  array.length -= 1;
  return popOff
}

// Question 7
const unshift = function (array, value){
  for (let i = array.length - 1; i >= 0; i -= 1){
    array[i + 1] = array[i];
  }
  array[0] = value;
  return array.length
}

// Question 8
const shift = function (array){
  let popOff = array[0];
  for (let i = 1; i < array.length; i += 1){
     array[i - 1] = array[i];
  }
  array.length = array.length - 1
  return popOff;
};

// Question 9
const lastIndexOf = function (array, value){
   for (let i = array.length - 1; i >= 0 ; i -= 1){
    if (array[i] === value){
      return i;
    } 
}
  return -1 
};

// Question 10
const slice = function (array, start = 0, end = array.length) {
  let cut = [];
  for (let i = start; i < end; i += 1 ){
   push(cut, array[i]);
  }
  return cut;
}

// Question 11
const splice = function(array, start, deleteCount) {
  let cutValues = slice(array, start, start + deleteCount);
  for (let i = start; i < array.length; i += 1){
    array[i] = array[i + deleteCount];
  }
  array.length = array.length - deleteCount;
  return cutValues;
};

// Question 12
const spliceForReal = function(array, start, deleteCount, ...insert) {
let cutValues = slice(array, start, start + deleteCount);
 splice(array, start);
 let rhs = slice(array,start);
 array.length = start;
 for (let i = 0;  i < insert.length; i += 1){
   push(array, insert[i]);
 }
 for(let i = 0; i < rhs.length; i+= 1 ) {
   push(array, rhs[i]);
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
