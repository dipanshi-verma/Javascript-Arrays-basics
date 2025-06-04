// 1.Create a function statement that takes a string and returns the number of vowels present in it.
function statement(u){
    let count=0;
    let s = u.toLowerCase();
    for(let i = 0;i<s.length;i++)
    {
        if(s.charAt(i)=='a'|| s.charAt(i)=='e'||s.charAt(i)=='i'||s.charAt(i)=='o'||s.charAt(i)=='u')
        {
            count++;
        }

    }
    return count;
}
console.log(statement("Hello Javascript"));




//2. Use a function expression to check if a number is a prime number or not.
const isPrime = function(num) 
{
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
};




//3.Write a function declaration that checks whether a given string is an anagram of another.
function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false





// 4.Use an anonymous function inside setInterval to log the current timestamp every 3 seconds.
// setInterval(() => {
//     console.log(new Date().getTime());
// }, 3000);



// 5.Implement a named function expression that recursively calculates the sum of digits of a number.
const sumOfDigits = function sumDigits(n) {
    if (n < 10) return n;
    return n % 10 + sumDigits(Math.floor(n / 10));
};



// 6.Use a named function expression to count the number of words in a string.
const countWords = function wordCounter(str) {
    return str.trim().split(/\s+/).length;
};




// 7.Create a function generateReport(studentName, totalMarks, grade) that logs a structured report
//  using the passed arguments.
function generateReport(studentName, totalMarks, grade) {
    console.log(`------------------------- Student Report -------------------------`);
    console.log(`Student Name: ${studentName}`);
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Grade: ${grade}`);
    console.log(`-----------------------------------------------------------------`);
}
generateReport("John Doe", 450, "A+");





// 8. Write a function that accepts an object as a parameter and destructures it to extract and display user details.
function displayUserDetails({ name, age, occupation }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Occupation: ${occupation}`);
}
const user = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};
displayUserDetails(user);





//9. Write a function that accepts another function as an argument, adds some logging before and after its execution, and then executes it.
function executeWithLogging(func) {
    console.log("Before execution");
    func();
    console.log("After execution");
}
function exampleFunction() {
    console.log("Hello, World!");
}
executeWithLogging(exampleFunction);




//10. Create a function that returns another function which greets a specific user (closure concept).
function createGreeter(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}
const greetMorning = createGreeter("Good Morning");
const greetEvening = createGreeter("Good Evening");
greetMorning("John");
greetEvening("Jane");





// 11.Store multiple functions inside an array and invoke each one in a loop.
const functions = [
    () => console.log("Function 1"),
    () => console.log("Function 2"),
    () => console.log("Function 3")
];
functions.forEach(func => func());




// 12. Rewrite a traditional function into an arrow function that checks if a year is a leap year.
const isLeapYear = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 





// 13. Write an arrow function that filters an array of numbers and returns only those divisible by 3 and 5.
const numbers = [3, 5, 15, 20, 30, 45];
const divisible = numbers.filter(num => num % 3 === 0 && num % 5 === 0);
console.log(divisible);





// 14. Use an arrow function with .reduce() to calculate the total price from a list of products (with price field).
const products = [
    { price: 10 },
    { price: 20 },
    { price: 30 }
];

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

console.log(totalPrice); 





// 15. Write a function customMap(arr, callback) that mimics the behavior of the native .map() method.
function customMap(arr, callback) 
{
    const result = [];
    for (let i = 0; i < arr.length; i++) 
        {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
const num1 = [1, 2, 3, 4, 5];
const doubledNumbers = customMap(num1, num => num * 2);
console.log(doubledNumbers);




// 16. Create a function that takes another function and an argument, and applies the function after a delay of 2 seconds.
function delayed(func, arg, delay) 
{
    setTimeout(() => func(arg), delay);
}
function greet(name) 
{
    console.log(`Hello, ${name}!`);
}
delayed(greet, "Akshay", 2000);





//17. Create a calculator function that takes two numbers and a callback to perform operations like add, subtract, multiply, etc.
function calculator(a, b, callback) 
{
    return callback(a, b);
}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        console.log("Cannot divide by zero");    
    }
    else{
    return a / b;
    }
};
console.log(calculator(10, 5, add)); 
console.log(calculator(10, 5, subtract));
console.log(calculator(10, 5, multiply)); 
console.log(calculator(10, 5, divide)); 





// 18. Write a function fetchUserData(id, callback) that simulates an asynchronous API call using setTimeout.
function fetchUserData(id, callback){
setTimeout(() => {
        const userData = {
            id: id,
            name: "John Doe",
            email: "john.doe@example.com"
        };
        callback(userData);
    }, 2000);
}
fetchUserData(1, userData => {
    console.log(userData);
});





// 19. Implement a function that maintains a counter using closure and returns increment/decrement methods.
function counter() {
    let count = 0;
    return {
        increment: () => count++,
        decrement: () => count--,
        getValue: () => count
    };
}
const counterInstance = counter();
console.log(counterInstance.getValue()); 
counterInstance.increment();
console.log(counterInstance.getValue()); 
counterInstance.increment();
console.log(counterInstance.getValue()); 
counterInstance.decrement();
console.log(counterInstance.getValue()); 






// 20.Create a function secureAccess(role) that returns another 
// function which checks if the user has access based on role (admin, user, guest).
function secureAccess(role) {
    return function(userRole) {
        return userRole === role;
    };
}

const isAdmin = secureAccess("admin");
const isUser = secureAccess("user");

console.log(isAdmin("admin")); 
console.log(isAdmin("user")); 
console.log(isUser("user")); 
console.log(isUser("admin")); 


function checkAccess(userRole, requiredRole) {
    const hasAccess = secureAccess(requiredRole);
    if (hasAccess(userRole)) {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }
}

checkAccess("admin", "admin"); 
checkAccess("user", "admin");













