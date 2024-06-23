## Google's V8 Engine

Converts JS code into Machine code.

## libuv

It is a open source library which focuses on asynchronous operations like input/output. This layer gives NodeJS access to the computer's operating system, file system, networking and more.
It also implements the Event Loop and Thread Pool.
Event Loop: Is responsible for executing simple tasks like callback functions and network I/O
Tread Pool: Is responsible for performing heavy tasks like accessing files or compressing

libuv - written in C++
V8 Engine - written in JS and C++
NodeJS - written in JS and C++

## Thread Pool

![alt text](image-1.png)
Event loop is Heart of NodeJS, it is responsible for all async tasks. It initializes the program, execute top level code, require modules, register event callbacks.
NodeJS is single threaded, so it uses just a single thread for 10 users or 10 million users. If event loop have any heav tasks like file reading, compressing, cryptography then it blocks the meain thread. So it offloads these heavy tasks to Thread Pool. Thread pool can configure upto 128 threads to complete these tasks.

## Event Loop

![alt text](image-2.png)
NodeJS is event driven and uses callback functions. For operations like file reading, http requests or timer expired it emits events. Event loop picks them up and call the callback functions related to those events.

Callback Queue:
![alt text](image.png)

We should use best practices to avoid blocking in NodeJS:
Don't use sync versions of the functions in fs, crypto and zlib moduels into callback functions
Don't perform complex calculations (nested loops)
Be careful with JSON in larger objects
Don't use too complex regular expressions(e.g. nested quantifier)
