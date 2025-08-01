// Scope of a variable - global, block & functional

// global scope

var globalScope = 10;

// block scope

let i = 4;
if (i > 2) {
  console.log(i);
  let j = 20;
  console.log(j);
}

// functional scope

function ScopeExample() {
  let u = 10;
  console.log(u);
}

// Lexical scope





