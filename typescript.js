"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello!');
class Typey {
    constructor() {
    }
    yo(name, func) {
        console.log(`Yo, ${name}!`);
        return func(name);
    }
    gimmeTypes() {
        return this;
    }
}
const typey = new Typey();
typey.yo('dan', () => 'dan');
console.log(typey.gimmeTypes());
let tuple = [true, false];
console.log(tuple);
let TypeyArray = [typey, 1];
console.log(TypeyArray);
