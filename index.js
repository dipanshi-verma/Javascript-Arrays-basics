// Create an array of numbers. Add one element to the end using push() and one to the
// beginning using unshift(). Print the final array.

let numbers = [1, 2, 3, 4, 5];
(numbers.push(6));
(numbers.unshift(0));
console.log(numbers);


// Create an array of 5 fruits. Remove the last element using pop() and the first element
// using shift(). Print the modified array.

let fruits = ["apple", "banana", "cherry", "date", "berry"];
fruits.pop();
fruits.shift();
console.log(fruits);

// Create an array [10, 20, 30, 40]. Use splice() to remove 20 and insert 25 at
// the same index. Print the result.
let array = [10, 20, 30, 40];
array.splice(1, 1, 25);
console.log(array);

// Create an array of 4 colors. Use join('-') to convert the array into a single string and
// print it.
let color = ['orange','blue','grey', 'beige'];
console.log(color.join('-'));


// Use toString() on an array [100, 200, 300] and print the result.
let num = [100, 200, 300];
console.log(num.toString());


// Create an array [5, 10, 15, 20]. Use .at(-1) to access the last element and print it
let nums = [5, 10, 15, 20];
const value =nums.at(-1);
console.log(value);


// Use copyWithin() to copy the first 2 elements of [1, 2, 3, 4, 5] into the last 2 positions. Print the result.
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(-2, 0, 2);
console.log(arr);

// Create a nested array [1, [2, 3], [4, [5]]]. Use flat(2) to flatten it
// // completely. Print the result.
let nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat(2));


// Use slice() to copy the middle two elements of [10, 20, 30, 40, 50]. Print the
//result.
let arr1 = [10, 20, 30, 40, 50];
console.log(arr1.slice(1, 3));

// Use concat() to merge two arrays [1, 2] and [3, 4]. Print the final array.
let arr2 = [1, 2];
let arr3 = [3, 4];
console.log(arr2.concat(arr3));


// Create an array of 5 numbers. Use the delete operator to delete the 2nd index value.
// Print the array and its length.
let numbers1 = [1, 2, 3, 4, 5];
delete numbers1[2];
console.log(numbers1);
console.log(numbers1.length);

//  Use toSpliced() to remove the second element of an array [9, 8, 7, 6] and
// insert 10, 11 at that position. Print original and new array.
const ori = [9, 8, 7, 6];
const updated = ori.toSpliced(1, 1, 10, 11);
console.log("Original Array:", ori); 
console.log("Updated Array:", updated);   


// Create an array [1, 2, 3, 4, 5]. Use splice() to remove last 2 elements and
// print the resulting array.
let numbers4 = [1, 2, 3, 4, 5];
numbers4.splice(-2, 2);
console.log(numbers4);


// Make a copy of [7, 8, 9] and insert 6 at the beginning using unshift() without
//modifying the original array.
let num5 = [7, 8, 9];
let num6 = num5;
num6.unshift(6);
console.log(num5);
console.log(num6);

//  Write a function that accepts an array and returns a string of all elements joined with ' | '.
function joinArray(arr) 
{
    return arr.join(' | ');
}
console.log(joinArray([1, 2, 3, 4, 5])); 


// Create a function that returns the last item of an array using only .length.
function getLastItem(arr) 
{
    return arr[arr.length - 1];
}
console.log(getLastItem([1, 2, 3, 4, 5]));



// Write a function to return the 2nd last element using .at() method.
function getSecLastElement(arr)
{
    return arr.at(arr.length - 2);
}
console.log(getSecLastElement([1, 2, 3, 4, 5]));



//  Create a function to reverse an array without using reverse() method (use
// unshift() inside a loop).
function reverseArray(arr) 
{
  const rev = [];
  for (let i = 0; i < arr.length; i++) 
    {
        rev.unshift(arr[i]); 
        return rev;
    }
}
const original = [1, 2, 3, 4, 5];
const reverse = reverseArray(original);
console.log(reverse); 


// . Flatten a 2D array like [[1,2],[3,4]] using .flat() and return it.
function flattenArray(arr)
{
    return arr.flat();
}
const flat = flattenArray([[1, 2], [3, 4]]);
console.log(flat);


// . Given two arrays, one of names and one of marks, return a combined array of string
// format like ["Ram: 80", "Shyam: 90"] using join() and loop.
const names = ["Ram", "Shyam", "Mohan"];
const marks = [80, 90, 75];
const combined = [];
for (let i = 0; i < names.length; i++) 
{
  combined.push([names[i], marks[i]].join(": "));
}
console.log(combined); 






