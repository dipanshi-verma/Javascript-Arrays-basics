// Write a switch-based calculator supporting +, -, *, /, %, and **.
let a = 10 ,b=12;
let operator = prompt("Enter operator(+,-,*,/,%,**)");
switch (operator) 
{
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        if(b!=0){
        console.log(a/b);
        }
        else {
            console.log("error! division by zero not possible");
        }
        break;
    case "%":
     console.log(a%b);
     break;

    case "**":
        console.log(a**b);
        break;
    default:
        console.log("Invalid operator");
}



// Use switch to print the full name of a month when a number (1–12) is given.
let month = 5;
switch (month) 
{
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");

}



// Build a switch block to convert grades (A-F) to performance messages.
let grade = "B";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Fair");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Failing");
        break;
    default:
        console.log("Invalid grade");
}





// Create a switch that checks browser type (Chrome, Firefox, etc.) and prints support
// message.
let browser = "Chrome";
switch (browser) {
    case "Chrome":
        console.log("Chrome is supported");
        break;
    case "Firefox":
        console.log("Firefox is supported");
        break;
    case "Microsoft Edge":
        console.log("Microsoft Edge is supported");
        break;
    case "Safari":
        console.log("Safari is supported");
        break;
    case "Opera":
        console.log("Opera is supported");
        break;
    default :
    console.log("Browser not supported");
}




// Check whether a number is even or odd using switch and modulo %.
let number = 10;
switch (number % 2) {
    case 0:
        console.log("Number is even");
        break;
    case 1:
        console.log("Number is odd");
        break;
    default:
        console.log("Invalid number");
}




//  Nested switch: Check user role (admin, user) and their action (create, edit,delete).
let userRole = "admin";
let action = "create";
switch(action)
{
    case "create":
        switch(userRole)
        {
            case "admin":
                console.log("Admin can create");
                break;
            case "user":
                console.log("User can create");
                break;
            default:
                console.log("Invalid user role");
        }
        break;
        case "edit":
            switch(userRole)
            {
                case "admin":
                console.log("Admin can edit");
                    break;
                    case "user":
                console.log("User can edit");
                    break;
                    default:
                console.log("Invalid user role");
            }
            break;
            case "delete":
                switch(userRole)
                   {
                        case "admin":
                            console.log("Admin can delete");
                            break;
                        case "user":
                            console.log("User can't delete");
                            break;
                        default:
                            console.log("Invalid user role");
                    }
                    break;
    default:
       console.log("Invalid action");
}




// Use switch with true to categorize age groups: Child, Teen, Adult, Senior.
let age = 25;
switch (true) 
{
    case (age<5):
    console.log("Child")
    break;
    case (age>5 && age<=17):
    console.log("Teen")
    break;
    case (age>18 && age<50):
    console.log("Adult")
    break;  
    case (age>50):
        console.log("Senior")
        break;
    default:
        console.log("Invalid age");
                                                                    
}


// What happens when break is missing in a switch? Explain with example
switch (userRole) {
    case "admin":
        console.log("Admin can create");
        console.log("Admin can read");
        console.log("Admin can update");
    case "user":
        console.log("User can read");
        break;
    default:
        console.log("Invalid user role");
}
// In this example, the break is missing in the case "user". This means that when the switch statement encounters 
// the case "user", it will execute the code in the case "user"  and further cases until it encounters a break.





// Q9.Can we place default at the top of the switch block? Show with code.
switch (userRole) {
    default:
        console.log("Invalid user role");
    case "admin":
        console.log("Admin can create");
        console.log("Admin can read");
        console.log("Admin can update");
    case "user":
        console.log("User can read");
}
// In this example, the default case is placed at the top of the switch block. This means
// that when the switch statement encounters a case that doesn't match the userRole, it will execute the default case 
// and then continue to the next cases until it encounters a break.
// This is not recommended as it can lead to unexpected behavior. The default case should be placed at the end of the switch block.




// 10. Explain fall-through in switch with a multi-case example
let day = 3;

switch (day) 
{
  case 1:
    console.log("Monday");
    break;

  case 2:
  case 3:
  case 4:
    console.log("Midweek day");
    break;

  case 5:
    console.log("Friday");
    break;

  default:
    console.log("Weekend");
}

// This structure is useful when multiple cases need the same output or logic.




// 11. Use map() to convert an array of numbers into their squares.
let array = [1, 2, 3, 4, 5];
let squares = array.map((x) =>x*x);
console.log(squares);






// 12. Use filter() to return only the names longer than 5 characters.
let names = ["Johnny", "Mariyana", "David", "Davis", "Emy"];
let longNames = names.filter(name =>name.length >5);
console.log(longNames);




// 13. Use reduce() to find the sum of all odd numbers in an array.
let numbers = [1, 2, 3, 4, 5, 6];
let sum1 = numbers.reduce((x, y) =>{
            if (y % 2 != 0) 
            {
               return x + y;
            }
               return x;
        }
    );
console.log(sum1);




// 14. Implement your own version of map() called customMap()
function customMap(arr, callback) 
{
    let result = [];

    for (let i = 0; i < arr.length; i++) 
    {
        result.push(callback(arr[i]));
    }

    return result;
}
let nums = [1, 2, 3, 4, 5];

let doubled = customMap(nums, function(num) {
    return num * 2;
});

console.log(doubled);  





// 15. Create a function repeat(fn, n) to call any function n times.
function repeat(fn, n) 
{
   for(let i = 0;i<n;i++)
   {
    fn();
   }
}
function Holla()
{
    console.log("Shinchan shinchan pyara pyara!");
}
repeat(Holla, 5);



// 16. Use forEach() to print the index and value of each array element.
let arr1 = [3,6,9,12,15,18,21,24,30];
arr1.forEach(function(value, index) {
    console.log(`Index: ${index}, Value: ${value}`);
});




// 17. Use reduce() to convert an array of strings into a sentence.
let sentence = ["Hello", "my", "name", "is", "Dipanshi"];
let result = sentence.reduce(function(acc, curr) {
    return acc + " " + curr;
    }, "");
    console.log(result);




// 18. Filter out all palindromes from a string array.
let words = ["radar", "level", "python", "java", "civic"];
let filtered = words.filter(function(word) {
    return word !== word.split('').reverse().join('');
    });
    console.log(filtered);





// 19. Map through an array of numbers and return strings like “Even” or “Odd”.
let num1 = [1, 2, 3, 4, 5, 6]
let res = num1.map(function(num) {
    return num % 2 === 0 ? "Even" : "Odd";
    });
    console.log(res);





// 20. Use reduce() to count how many times each number appears in an array.
let num2 = [1, 2, 2, 3, 3, 3]
let count = num2.reduce(function(acc, curr) {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
    }, {});
    console.log(count);



// 21. Create a function that accepts another function and applies delay using setTimeout().
function delay(func, delay) 
{
    return function() 
    {
        return setTimeout(func, delay);
    }
}
    let delayed = delay(function() {
    console.log("Hello");
    }, 2000);
console.log(delayed);




// 22. Filter an array of user objects (with name, age) to return only adults (age > 18).
let users = [
    {name: "John", age: 20},
    {name: "Jane", age: 17},
    {name: "Bob", age: 25},
    {name: "Alice", age: 19}
    ];
    let adults = users.filter(function(user) {
        return user.age >18; 
    });
        console.log(adults);




// 23. What's the difference between map() and forEach()? Show code example.
let nu = [1, 2, 3, 4, 5];
let mapped = nu.map(function(num) {
    return num * 2;
    });
    let forEached = nu.forEach(function(num) {
        console.log(num * 2);
        });
        console.log(mapped);




//23. What's the difference between map() and forEach()? Show code example
//Ans :  the difference between map() and forEach() is that map() creates a new array
//  with the results of calling a provided function on every element in the calling array, while forEach() 
// executes a provided function once for each array element without returning a new array.
// map example
const num12 = [1, 2, 3];
const doubled12 = num12.map(num => num * 2);

console.log(doubled12);  


// forEach Example
const num21 = [1, 2, 3];

num21.forEach(num => {
  console.log(num * 2);
});





//24. Why is reduce() called powerful in functional programming? Explain with one-liner code.
//Ans: reduce() is called powerful in functional programming because it allows you to accumulate values and transform data structures in a single pass, enabling complex operations like summing, averaging, or grouping data efficiently.
// Example of map() vs forEach()
let numbersList = [1, 2, 3, 4, 5];
// Using map() to create a new array with squares of numbers
let squaresList = numbersList.map(function(num) {
    return num * num;
});
console.log(squaresList); 
// Using forEach() to log each number
numbersList.forEach(function(num) {
    console.log(num); 
});
// Example of reduce() to find the sum of an array
let sum = numbersList.reduce(function(accumulator, num) {
    return accumulator + num;
}, 0);
console.log(sum); 








//25. Explain what makes a function “Higher Order” with real code example.
// A function is considered "Higher Order" if it can take other functions as arguments or return a function as its result.
// Example of a Higher Order Function
function higherOrderFunction(fn) {
    return function(x) {
        return fn(x) * 2; 
    };
}
let square = function(x) {
    return x * x;
};
let doubleSquare = higherOrderFunction(square);
console.log(doubleSquare(3));






//26. Create a bankAccount object with deposit() and withdraw() methods using this.
let bankAccount = {
    balance: 0,
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    }
};


//27. Write an object with name and a method sayHello() that uses this correctly
let person = {
    name: "Alice",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};







//28. Use Object.keys() to print only the keys of an object dynamically.
let dynamicObject = {
    name: "Bob",
    age: 30,
    occupation: "Developer"
};
Object.keys(dynamicObject).forEach(function(key) {
    console.log(`Key: ${key}`);
});




//29. Use Object.values() to sum all values of a numeric object.

let numericObject = {
    a: 10,
    b: 20,
    c: 30
};
let sumValues = Object.values(numericObject).reduce(function(accumulator, value) {
    return accumulator + value;
}, 0);
console.log(`Sum of values: ${sumValues}`);



//30. Merge two objects using Object.assign() and print the merged result
let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };
let mergedObject = Object.assign({}, object1, object2);
console.log("Merged Object:", mergedObject); 




//31. Freeze an object using Object.freeze() and try modifying it — verify the result.
let frozenObject = Object.freeze({ x: 1, y: 2 });
frozenObject.x = 10; 
console.log("Frozen Object:", frozenObject); 



//32. Seal an object using Object.seal() and test adding & updating keys.
let sealedObject = Object.seal({ a: 1, b: 2 });
sealedObject.a = 10;
sealedObject.c = 3; 
console.log("Sealed Object:", sealedObject); 




//33. Check if a key exists in an object using hasOwnProperty().
let checkObject = { name: "Charlie", age: 25 };
if (checkObject.hasOwnProperty("name")) {
    console.log("Key 'name' exists in the object.");
}
else {
    console.log("Key 'name' does not exist in the object.");
}




//34. Build an object with custom methods: add(), subtract(), and call them.
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(5, 3));







//35. Create a student object with method getDetails() that returns a formatted string.
let student = {
    name: "David",
    age: 20,
    course: "Computer Science",
    getDetails: function() {
        return `${this.name}, Age: ${this.age}, Course: ${this.course}`;
    }
};
console.log(student.getDetails());








//36. Make a method that removes keys with null or undefined values from an object.
function cleanObject(obj) {
    for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}
let messyObject = { a: 1, b: null, c: 3, d: undefined };
console.log("Cleaned Object:", cleanObject(messyObject)); 







//Explain the difference between Object.freeze() and Object.seal() with examples.
//Ans : Object.freeze() prevents any changes to the object, including adding, removing, or modifying properties.
// Object.seal() allows existing properties to be modified but prevents adding or removing properties.
// Example of Object.freeze()
let frozenExample = Object.freeze({ x: 1, y: 2 });
frozenExample.x = 10; 
console.log("Frozen Example:", frozenExample); 
// Example of Object.seal()
let sealedExample = Object.seal({ a: 1, b: 2 });
sealedExample.a = 10;
sealedExample.c = 3;
console.log("Sealed Example:", sealedExample); 




//38. What happens if we use arrow function as object method and access this? Show output.
let arrowObject = {
    name: "Eve",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};
arrowObject.greet();
// Output: Hello, my name is undefined
// Explanation: Arrow functions do not have their own `this` context; they inherit `this` from the surrounding scope, which in this case is the global scope where `name` is not defined.





//39. Show an example where method is passed as callback and loses this context.
let personWithMethod = {
    name: "Frank",
    sayName: function() {
        console.log(`My name is ${this.name}`);
    }
};
function executeCallback(callback) {
    callback(); // This will lose the context of `this`
}
executeCallback(personWithMethod.sayName);
// Output: My name is undefined
// Explanation: When `sayName` is passed as a callback, it loses its context, and `this` refers to the global object (or undefined in strict mode), not the `personWithMethod` object.




//40. Explain Object.entries() and its use in converting object to array of key-value pairs.
// Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
let exampleObject = { a: 1, b: 2, c: 3 };
let entriesArray = Object.entries(exampleObject);
console.log("Object Entries:", entriesArray);
// Output: Object Entries: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// Explanation: This method is useful for iterating over an object's properties or converting an object into a format that can be easily manipulated as an array of key-value pairs.











