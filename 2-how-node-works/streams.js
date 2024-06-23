const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   solution 1
  //   const fileData = fs.readFileSync("test-file.txt");
  //   res.end(fileData);
  //   solution 2 - using streams
  // const readable = fs.createReadStream("test-filse.txt");
  // readable.on("data", (chunk) => {
  //     res.write(chunk);
  // });
  // readable.on("end", () => {
  //     res.end();
  // });
  // readable.on("error", (err) => {
  //     res.statusCode = 500;
  //     res.end("File not found!");
  // });

  //   solution 3 - using pipe
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});

server.listen(9090, () => {
  console.log("Waiting for file to read...");
});
