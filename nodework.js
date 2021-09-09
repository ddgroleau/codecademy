let events = require('events');
const readline = require('readline');
const fs = require('fs');
const http = require('http');

console.log(process.memoryUsage());

let myEmitter = new events.EventEmitter();

// essentially a node.js event listener
let callback = (data) => {
    console.log('trying this out... ' + data);
};

// Tells the emitter what event and what to do when that event happens
myEmitter.on('test', callback);

// performs the emitting, first arg is event and second is callback argument
myEmitter.emit('test','it worked!');

// essentially console.log()
process.stdout.write("Hello World!");

// get user console input
// process.stdin.on('data', data => {
//     console.log(`You typed ${data.toString()}`);
//     process.exit();
//   });

// async error handling
let myFunc = (err, data) => {
    if (err) { // <-- Call error first
      console.log(`Something went wrong: ${err}`);
    } else {
      console.log(`Provided file contained: ${data}`);
    }
  };

  // callback to read text file
const readData = (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Reading file... ${data}`);
    }
}

  //Read file asychronously
  fs.readFile("./text.txt",'utf8', readData);

  // read file stream by line
  const xface = readline.createInterface({
      input: fs.createReadStream("./text.txt")
  });

  xface.on("line", readData);

  // Write to file
  const writer = fs.createWriteStream('./text.txt');
  
  writer.write('I wrote line 1 with node!');
  writer.write('I wrote line 2 with node!');
  writer.write('I wrote line 3 with node!');
  writer.end();
  fs.readFile("./text.txt",'utf8', readData);

  //create a server
  const PORT = 3000;

  let requestListener = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain' });
    response.write(`Hello World! Server listening on ${PORT}\n`);
    response.end();
  };
  
  const server = http.createServer(requestListener);
  
  server.listen(PORT);