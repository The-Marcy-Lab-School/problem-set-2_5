# Problem Set 2.5 - Array Fundamentals
## Short Response Section

**Directions:**
Write your responses to the questions below directly in this document. When you commit and push your changes, you will be able to see your rendered markdown on GitHub.

**1. What does it mean for arrays to be _passed by reference_ in JavaScript? Be sure to include a code snippet to illustrate your response.**
Answer: When an array is _passed by reference_ in JavaScript it is a pointer is pointing to a memory address inside your computer that stored that variable. 
``` javascript code snippet
  
  const add = function(num){
    num = num * 2;
  }
  let num = 7;
  num = add(num);
  // num now is equal to 14

```


**2. What does it mean to _destructure_ a JavaScript array? How do we use the _spread operator_ for destructuring. Be sure to include a code snippet to illustrate your response.**
Answer: To destructure a JavaScript Array is to take each elements in an array thats group together and make those elements it's own element.

``` javascript code snippet
const add = function(a,b,c){
  return a + b + c;
}
let nums = [1,2,3];
add(...nums)
// 6 

```

**3. What is the purpose of _rest parameters_? How do we use them? Use a code snippet to illustrate your response. Lastly, explain how do they differ from the `arguments` object?**
Answer: The purpose of _rest parameters_ is to be able to use our function whenever we want to take an indefinite number of arguments. We use them when declaring our function and it is used on the last parameter. They differ from the `arguments` object because the `arguments` object is arraylike and not an array.

```javascript code snippet
const fam = function (mom, dad, ...restOfYall){
  let tree = `${mom} ${dad} ${restOfYall}`
  return tree;
}
```