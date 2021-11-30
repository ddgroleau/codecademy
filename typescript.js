"use strict";
console.log('Hello!');
class Typey {
    constructor() {
    }
    yo(name) {
        console.log(`Yo, ${name}!`);
    }
    gimmeTypes() {
        return this;
    }
}
const typey = new Typey();
typey.yo('dan');
console.log(typey.gimmeTypes());
