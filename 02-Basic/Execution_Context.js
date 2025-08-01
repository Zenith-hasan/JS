// Execution context is a concept that describe the environment in which code is evaluated and executed. It's like a box that store all the information to run piece of code.




//
function first() {
    console.log('First function');
    second();
}

function second() {
    console.log('Second function');
}

first(); // Creates execution contexts in the call stack

/* Output :
    First function
    Second function
    */