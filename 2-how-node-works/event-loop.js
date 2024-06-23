const fs = require("fs");
const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 4; // By default it is 4, this is how we can configure it manually
const start = Date.now();

setTimeout(() => console.log("setTimeout1"), 0);
setImmediate(() => console.log("Immediate timeout"));

fs.readFile("test-file.txt", "utf-8", () => {
  console.log("file reading completed");
  console.log("---------------------------------------------");
  setTimeout(() => console.log("setTimeout2"));
  setTimeout(() => console.log("setTimeout 3"), 3000);
  setImmediate(() => console.log("Immediate timeout2"));
  process.nextTick(() => console.log("nextTick"));
  console.log("some text");

  // Checking threadpool - ansyc
  //   crypto.pbkdf2("password", "salt", 200000, 1024, "sha512", () => {
  //     console.log(Date.now() - start, " Password encrypted");
  //   });
  //   crypto.pbkdf2("password", "salt", 200000, 1024, "sha512", () => {
  //     console.log(Date.now() - start, " Password encrypted");
  //   });
  //   crypto.pbkdf2("password", "salt", 200000, 1024, "sha512", () => {
  //     console.log(Date.now() - start, " Password encrypted");
  //   });
  //   crypto.pbkdf2("password", "salt", 200000, 1024, "sha512", () => {
  //     console.log(Date.now() - start, " Password encrypted");
  //   });

  //   Encrypting in sync - it is executed by Event Loop not by the Thread Pool
  crypto.pbkdf2Sync("password", "salt", 200000, 1024, "sha512");
  console.log(Date.now() - start, " Password encrypted");
  crypto.pbkdf2Sync("password", "salt", 200000, 1024, "sha512");
  console.log(Date.now() - start, " Password encrypted");
  crypto.pbkdf2Sync("password", "salt", 200000, 1024, "sha512");
  console.log(Date.now() - start, " Password encrypted");
  crypto.pbkdf2Sync("password", "salt", 200000, 1024, "sha512");
  console.log(Date.now() - start, " Password encrypted");
});

console.log("some top level code");
