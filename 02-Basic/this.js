// this value in Global scope
console.log(this);
// in browser it gives window and in the node js it's give empty object

// this keyword in a function

function show() {
  console.log(this);
}

show();

let obj = {
  name: "Hasan",
  age: 22,
  city: "Dhaka",
  info: function () {
    console.log(this);
  },
};
obj.info();

// function in strict mode give the value of "this" keyword is undefined and non-strict mode is refers to global object.



// 'this' in the event handler 
document.querySelector("h2").addEventListener("click", function () {
    console.log(this.style.color = "white")
});

// in a event handler 'this' always refers to the selected element


/* The value of 'this'  keyword -
    global - window
    function - window
    method with es5 func - object
    method with es6 arrow func - window
    es5 function inside es5 method - window
    arrow function inside es5 method - object
    event handler - selected element
    class - blank object*/ 


    

