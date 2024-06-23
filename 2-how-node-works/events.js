const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

// Another way to initialize event emitter
// class myClass extends EventEmitter {
//   constructor() {
//     super();
//   }
// }
// const myEmitter = new myClass()

myEmitter.on("onSale", () => {
  console.log("There is a sell!");
});

myEmitter.on("onSale", (items) => {
  console.log(`Only ${items} items left in the stock`);
});

myEmitter.emit("onSale", 8);

//////////////////////////////////////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("First request");
  console.log("request url:");
  console.log(req.url);
  res.end("First Request!");
});

server.listen(9090, () => {
  console.log("Waiting for requests...");
});
