# Problem Set 2.5
## JavaScript Array Fundamentals

1. Create a function named `shoutOut` that takes an array of items as an argument and logs all the items to the console.

2. **Recreate `Array.prototype.reverse`**: Create a function named `reverseArray` that returns the contents of the array it receives as an argument, but with the values in reversed order. You may not use the `Array.prototype.reverse` method. This should be a _non-mutating_ method. Meaning the original array should not be changed.

3. **Recreate `Array.prototype.indexOf`**: Create a function called `indexOf` that finds the first instance of a value in an array and returns the index position of the value, or -1 if the value is not in the array. The function should take two arguments: the value to search for, and the array to search. **Hint:** _Use the break keyword to exit the loop immediately when you find the first instance of the value._ 

    Ex:
    ```javascript
    const friends = ['carmen', 'anne', 'steph', 'mark'];
    indexOf('carmen'); // 0
    indexOf('steph'); // 2
    indexOf('reuben'); // -1
    ```
4. **Recreate `Array.prototype.join`**: Create a function called `join` that takes two arguments, an array and a _separator_. This function should return a string with all the elements of the array coerced to strings and concatenated together, separated by the _separator_. If no separator is given, the default separator should be a comma (`,`). **Hint**: You will have to use a default argument.

    Ex:
    ```javascript
    join([true, "reuben", "maya", 21], "+"); // "true+reuben+maya+21"
    join(['peter', 'paul', 'cielo'], "💪🏽"); // "peter💪🏽paul💪🏽cielo" 
    join(['javascript', 'html', 'css']); // "javascript,html,css"
    ```

5. **Recreate `Array.prototype.push`**: Write a function named `push` that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array, and return the new length of the Array.

    Ex:
    ```javascript
    const randoArray = [true, '41', 'steph'];
    push(randoArray, 'maya'); // 4
    randoArray; // [true, '41', 'steph', 'maya']
    ```

6. **Recreate `Array.prototype.pop`**: Write a function named `pop` that accepts one argument: an Array. The function should remove the last element from the array and return it.

    Ex:
    ```javascript
    const letters = ['a', 'b', 'c', 'd'];
    pop(letters); // 'd'
    letters; // ['a', 'b', 'c'];
    ```

7. **Recreate `Array.prototype.unshift`**: Write a function named `unshift` that accepts two arguments: an Array and a value. The function should insert the value at the beginning of the Array, and return the new length of the array.

    Ex:
    ```javascript
    const numbers = [0, 1, 2, 3, 4];
    unshift(numbers, -1); // 6
    numbers; // [-1, 0, 1, 2, 3, 4];
    ```

8. **Recreate `Array.prototype.shift`**: Write a function named `shift` that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

    Ex:
    ```javascript
    const friends = ['maya', 'reuben', 'juan pablo'];
    shift(friends); // 'maya'
    friends; // ['reuben', 'juan pablo']
    ```

9. **Recreate `Array.prototype.lastIndexOf`**: Write a function `lastIndexOf` that accepts two arguments: an array and a value. The function returns the last index at which the value can be found in the array, or -1 if the value is not present.

    Ex:
    ```javascript
    const responses = ["good", "best", "bad", "good", "better"];
    lastIndexOf(responses, "good"); // 3
    ```

10. **Recreate `Array.prototype.slice`**: Write a function named `slice` that accepts three arguments: an Array, a start index, and an end index. The function should return a **new** Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. 
    **Note**: The second and third arguments are _optional_. If the third argument is missing, the function should return a copy from the starting index to the end of the array. If only an array argument is passed, it should return a copy of the array argument. 


    Ex:
    ```javascript
    const languages = ['python', 'ruby', 'javascript', 'java', 'c++'];
    slice(languages, 2, 4); // ['javascript', 'java']
    slice(languages, 1); // ['ruby', 'javascript', 'java', 'c++']
    slice(languages); // ['python', 'ruby', 'javascript', 'java', 'c++']
    languages; // ['python', 'ruby', 'javascript', 'java', 'c++']
    ```

11. **Recreate `Array.prototype.splice`**: Write a function named `splice` that accepts three arguments: an Array, a start index, and the number of values to remove. The function should remove values from the original Array, starting with the first index and removing the specified number of values. The function should return the removed values in a new Array.


    Ex:
    ```javascript
    const languages = ['python', 'ruby', 'javascript', 'java', 'c++'];
    splice(languages, 0, 2); // ['python', 'ruby'];
    languages; // ['javascript', 'java', 'c++'] 
    ```
12. **Improve `Array.prototype.splice` implementation**: The `Array.prototype.splice` method takes additional arguments that are injected into the original array, after the selected elements have been removed. Rewrite your `splice` method to include this functionality. Your new function, `spliceForReal` should take an array, a starting index, a delete count, and then an arbitrary number of additional items to inject into the array.
    **Hint:** You will have to use _rest parameters_ to pull this off.

    Ex:
    ```javascript
    const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];
    spliceForReal(months, 1, 2, 'Febrero', 'Marzo'); // ['February', 'March']
    months; // ['Jan', 'Febrero', 'Marzo', 'April', 'May', 'June']

    const days = ['sun', 'thur', 'fri', 'sat'];
    spliceForReal(days, 1, 0, 'mon', 'tues', 'wed'); // []
    days; // ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat'];
    ```

13. **Recreate `Array.prototype.concat`**: Write a function named `concat` that accepts two Array arguments. The function should return a new Array that contains the values from each of the original Arrays.

    Ex:
    ```javascript
    concat(['a', 'b', 'c'], ['d', 'e']); // ['a', 'b', 'c', 'd', 'e']
    ```

14. **Shallow Comparison**: Write a function named `shallowCompare` that takes two arrays as arguments. The function should return true if the arrays contain the same values, or false if they do not.
    Ex:
    ```javascript
    shallowCompare([1], [1]);                               // true
    shallowCompare([1], [2]);                               // false
    shallowCompare([1, 2], [1, 2, 3]);                      // false
    shallowCompare([1, 'hi', true], [1, 'hi', true]);       // true
    shallowCompare([1, 'hi', true], [1, 'hi', false]);      // false
    shallowCompare([1, 'hi', true], [1, 'hello', true]);    // false
    shallowCompare([1, 'hi', true], [2, 'hi', true]);       // false
    ```

    **Note**: When comparing nested arrays, you do _not_ have to compare the inner values. You can use strict equality to compare _references_. In other words, when performing a _shallow_ comparison of arrays, when we encounter an object/array, we only have to check if they are the same object; we don't have to check the equality of inner values.
    ```javascript
    shallowCompare([1, 2, 3, [3.5, 3.75], 4], [1, 2, 3, [3.5, 3.75], 4]); // false
    const decimals = [3.5, 3.75];
    shallowCompare([1, 2, 3, decimals, 4], [1, 2, 3, decimals, 4]); // true
    ```

15. **Deep Compare**: Write a function names `deepCompare` that takes, as arguments, two arrays. The function should return true if the arrays contain the same values. If the arguments contain nested arrays, `deepCompare` should compare the inner elements of the nested arrays.

    Ex:
    ```javascript
    deepCompare([true, 'devonte', 10], [true, 'devonte', 10]); // true
    deepCompare([true, 'devonte', 10], [true, 'devonte', 11]); // false 
    deepCompare([1, 2, 3, [3.5, 3.75], 4], [1, 2, 3, [3.5, 3.75], 4]); // true 
    ```

    **Hint**: You can use the `shallowCompare` function that created above.


