import { Type } from "typescript";

console.log('Hello!');
type TypeyFunction = (arg1:string) => string;

class Typey {
    constructor(){

    }

    yo(name:string,func:TypeyFunction) {
        console.log(`Yo, ${name}!`);
        return func(name);
    }

    gimmeTypes():Typey {
        return this;
    }
}

const typey:Typey = new Typey();

typey.yo('dan', ()=>'dan');

console.log(typey.gimmeTypes());

let tuple: [boolean, boolean] = [true, false];
console.log(tuple);

type MyType = [Typey, number];
let TypeyArray:MyType = [typey,1];
console.log(TypeyArray);