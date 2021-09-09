let events = require('events');

console.log(process.memoryUsage());

let myEmitter = new events.EventEmitter();

// essentially a node.js event listener
let callback = (data) => {
    console.log('user' + data);
};

// Tells the emitter what event and what to do when that event happens
myEmitter.on('user', callback);

// performs the emitting, first arg is event and second is callback argument
myEmitter.emit('user','it worked!');