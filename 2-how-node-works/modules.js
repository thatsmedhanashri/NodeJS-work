// console.log(arguments);
// console.log(require("module").wrapper); //Node internally uses this module

// module.exports
const calc1 = require("./calculator-module1");
const calculator1 = new calc1();
console.log(calculator1.add(2, 3));

// exports
const calc2 = require("./calculator-module2");
console.log("Multiplication: ", calc2.multiply(2, 4));

const { multiply, substract } = require("./calculator-module2");
console.log("Multiplication: ", multiply(2, 9));

// caching - Module gets loaded only once
require("./test-module")();
require("./test-module")();
require("./test-module")();
// output
// Hello from module!
// Learning NodeJS...
// Learning NodeJS...
// Learning NodeJS...
