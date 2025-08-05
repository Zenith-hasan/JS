Function.prototype.describe = function () {
  console.log(`Funciton name is ${this.name}`);
};

function greet(name){
    return `Hello ${name}`
}

greet("Avro").describe;