console.log('Hello!');

class Typey {
    constructor(){

    }

    yo(name:string) {
        console.log(`Yo, ${name}!`);
    }

    gimmeTypes():Typey {
        return this;
    }
}

const typey:Typey = new Typey();

typey.yo('dan');
console.log(typey.gimmeTypes());