const Module1 = require('./Module1');
const module1 = new Module1('Vasya', 4, 1);
const module2 = new Module1('Petya', 6, 5);

const Addition = require('./Addition');
const addition = new Addition('Stepan', 10, 40);

let substr = module1.substr();
console.log(`substr module1 = ${substr}`);

substr = module2.substr();
console.log(`substr module2 = ${substr}`);

module1.printString();
module2.printString();

console.log('===================');

let sum = addition.add();
console.log(`sum = ${sum}`);
addition.printString();
