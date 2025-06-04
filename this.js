// const obj = {
//     name :"Ram",
//     outer :function()
//     {
//         const inner = ()=>
//         {
//             console.log(this.obj);
//         }
//         inner();
//     }
// }
// obj.outer();



const name = "Ram";
function say() {
console.log(this.name);
}
say();
// Q1: What will be the output of the above code in:
// ● (a) Browser?->Ram
// ● (b) Node.js?->undefined





const user = {
name: "Aashi",
greet: function () {
function inner() {
console.log(this.name);
}
inner();
}
};
user.greet();
// Q2: What will be the output of inner()? Explain the behavior of this.
// ->undefined , in this case 'inner' is a regular function and does not have any reference to 'user' object. 
// So 'this' keyword will refer to the global object and hence it will print undefined




const obj = {
name: "Yogita",
show: function () {
const arrow = () => {
console.log(this.name);
};
arrow();
}
};
obj.show();
// Q3: Predict the output and explain how this works inside the arrow function
//Ans: The output will be "Yogita".
// The reason is that arrow functions do not have their own 'this' context. They inherit the parent's 'this'
//  context. So, in this case, 'this' will refer to the 'obj' object and hence it will print "Yogita".





const arrow = () => {
console.log(this);
};
const user100 = {
arrowFunc: arrow
};
user100.arrowFunc();
// Q4: Will this refer to user? Justify your answer.
// ans: No, it will refer to the global object. The reason is that arrow functions do not have their
// own 'this' context. They inherit the parent's 'this' context. In this case the parent is the
//  global object and hence 'this' will refer to the global object.






function Person(name) {
this.name = name;
this.say = () => {
console.log(this.name);
};
}
const p = new Person("Ram");
const sayFn = p.say;
sayFn();
// Q5: What will be the output of sayFn()? Explain the reference of this.
// ans: Ram
// The reason is that the 'this' context of the arrow function is inherited from the parent
//  object. In this case, the parent object is 'p' and hence 'this'
//  will refer to 'p' and hence it will print "Ram".






const obj1 = {
name: "Guru",
method: function () {
const arrow1 = () => {
function regular() {
console.log(this.name);
}
regular();
};
arrow1();
}
};
obj1.method();
// Q6: What will be the output and why? Focus on this in the regular function.
// ans: The output will be undefined.
// The reason is that the 'this' context of the regular function is the global object.
// Hence, 'this' will refer to the global object and hence it will print undefined.





const person = {
name: "Rahul",
getName: function () {
return function () {
console.log(this.name);
};
}
};
const fn = person.getName();
fn();
// Q7: What will be logged to the console? Why?
// ans: undefined
// The reason is that the 'this' context of the inner function is the global object.
// Hence, 'this' will refer to the global object and hence it will print undefined.







const person1 = {
name: "Raj",
getName: function () {
return () => {
console.log(this.name);
};
}
};
const fn2 = person1.getName();
fn2();
// Q8: What will be the output here? How does arrow function affect this?
// Ans: The output will be Raj.
// The reason is that the 'this' context of the arrow function is the context in which it
// is defined. In this case, it is the person object. Hence, 'this' will
// refer to the person object and hence it will print Raj.





const outer = {
name: "Outer",
inner: {
name: "Inner",
getName: function () {
console.log(this.name);
}
}
};
outer.inner.getName();
// Q9: Which object does this refer to? What will be the output?
// Ans:Inner
// The reason is that the 'this' context of the inner function is the inner object.
// Hence, 'this' will refer to the inner object and hence it will print Inner.







const obj19 = {
name: "Ram",
method: function () {
(function () {
console.log(this.name);
})();
}
};
obj19.method();
// Q10: Analyze the behavior of this inside the IIFE.
// Ans: The output will be undefined.
// The reason is that the 'this' context of the IIFE is the global object (window) and not the 
// obj3 object. Hence, 'this' will refer to the global object and hence it will







const obj3 = {
name: "Timer",
show: function () {
setTimeout(function () {
console.log(this.name);
}, 0);
}
};
obj3.show();
// Q11: What will be logged? What does this refer to inside setTimeout?
// ans:undefined
// The reason is that the 'this' context of the setTimeout function is the global object (window
// ) and not the obj3 object. Hence, 'this' will refer to the global object






const obj5 = {
name: "Timer",
show: function () {
setTimeout(() => {
console.log(this.name);
}, 0);
}
};
obj5.show();
// Q12: What will be the output? Why is arrow function behavior different?
// ans: Timer
// The reason is that the 'this' context of the arrow function is the context in which it
// is defined, which is the obj5 object. Hence, 'this' will refer to the obj5 object















