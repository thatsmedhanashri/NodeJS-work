# Introduction

Any browser natively know html, css and js. Browser excutes whatever we write in angukar, react or any other react framework.
But NodeJS doesn't execute in browser, it uses V8 engine to run the code.

# Callback Hell

Sometimes we need to execute functions one after the another because they are depending on previous functions. For this we need to write nested callback functions and it is called Callback Hell.
Solution: Promises, Async/Await

By default localhost's ip address is '127.0.0.1'

## fs module and writing reading/writing files non-blocking way

fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
if(err){
return console.log("Error while reading start.txt!")
}else{
fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data1) => {
fs.readFile('./txt/append.txt', 'utf-8', (err, data2) => {
fs.writeFile('./txt/final.txt', `${data1}\n${data2}`, 'utf-8', (err) => {
console.log("File written complete!")
})
})
})
}
})

## http module and Setting status code and headers

If we want to set headers and status code we need to set it before sending response content.
res.writeHead(404, {
Content-type': 'text/html',
'custom-header1': 'header1-value'
})
res.end("<h1>Page not found!</h1>")

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
\_\_dirname gives working directory name

Each file in directory will get seperate call on server. So if we are writing template then we can write inline css to reduce server hits.

## url module

const url = require('url')
const {query, pathname} = url.parse(req.url, true)
if(pathname === '/product'){
res.writeHead(200, {
'Content-Type': 'text/html'
})
const product = dataObj[query.id]
const output = replaceTemplate(tempProduct, product)
res.end(output)
}

## Modules

Every file in NodeJS is considered as module. Like index.js is a module.
We should import all modules first and then we should write our functions.
We should first import core modules which are required, then third party modules and then custom modules if any.

## CHECK THIS

https://nodejs.org/docs/latest/api/module.html
https://www.npmjs.com/package/express

## NPM

Node Package Manager is used to install and manage open source packages.
npm init - command creates package.json file

Two types of packages:
Regular packages:
Regular dependencies that we needed to work our code properly.
command - npm install package_name

Dev packages:
These are just tools for development code bundler like webpack, debugger tool or a testing library. These are just a development depemndencies which we don't need in production.
command - npm install package_name --save-dev

Two ways to install packages:
Locally:
Only available in the project in which we run the command.

Globally:
Available in all projects in the machine.
npm install package_name --global

Installing nodemon globally:
npm install nodemon --global
command to run project - nodemon index.js

But if we don't install nodemon or any other package globally i.e. we install it as local dependency then we can't run this in command line.
We need to write script to run this in package.json
Script:
"scripts": {
"start": "nodemon index.js"
}
command to run project - npm run start or npm start

## Using third party modules

npm install slugify

Options:
slugify('some string', {
replacement: '-', // replace spaces with replacement character, defaults to `-`
remove: undefined, // remove characters that match regex, defaults to `undefined`
lower: false, // convert to lower case, defaults to `false`
strict: false, // strip special characters except replacement, defaults to `false`
locale: 'vi', // language code of the locale to use
trim: true // trim leading and trailing replacement chars, defaults to `true`
})

A slug is a string that is used to uniquely identify a resource in a URL-friendly way. It is typically used in the URL to identify a specific page or post on a website. A slug consists of a set of characters that are easy to read and remember, and that accurately describe the content of the resource.

const slugify = require('slugify')
// slugify use
console.log(slugify('some string'))
console.log(slugify('some string&&', '\_'))

## package versioning

Uses semantic versioning
e.g. "nodemon": "^3.1.4"
major version - 3 [major changes which might break existing code]
minor version - 1 [some new features but which are backward compatible]
bug fixes - 4 [patches - only bug fixes]

^ - accepts minor and patch releases
~ - accepts only patch releases

- - accepts all the versions which might break our code functionality [we should not use this]
    npm outdated - checks outdated packages
    npm update package_name - update npm package
    npm uninstall package_name - uninstall or removes package from package.json

## node modules folder

It contains all the third party dependencies which are needed to work the code properly. It updates when we install or uninstall any packages.
package.json contains all the dependencies we needed in our project with there version, while package-lock,json maintains whole dependency graph. Because some dependencies we use which might depend on some other dependencies, so package-lock.json maintains the versioning of all direct and indirect dependencies.
If we want to share our project with someone, then we don't need to share node modules folder (it is very heavy), but we need to share package.json and package-lock.json to reconstruct the node modules folder using npm.

## Promises

const readFilePro = (file) => {
return new Promise((resolve, reject) => {
fs.readFile(file, (err, data) => {
if (err) reject("Unable to read file 😥");
resolve(data);
});
});
};

readFilePro(`${__dirname}/dog.txt`)
.then((data) => {
return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
})
.then((res) => {
return writeFilePro("dog-img.txt", res.body.message);
})
.then((data) => {
console.log(data);
})
.catch((err) => {
console.log(err);
});

Promise has 3 states: pending, fulfilled, rejected.
Initially is it pending state, if we get success then it returns resolve and on failure it returns reject.
Removes triangle structure in code and gives flat structure, which make easier to manage.

## Async/Await

const getDogPic = async () => {
try {
const data = await readFilePro(`${__dirname}/dog.txt`);
console.log(data);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const data1 = await writeFilePro("dog-img.txt", res.body.message);
    console.log(data1);

} catch (err) {
console.log(err);
}
};
getDogPic();

Async function runs in the background and don't block the event loop.
Async functions returns a Promise.
We can use await only inside async.
It makes the code more cleaner and readable.

## Waiting for multiple promises simultaneously

const res1 = superagent.get(
`https://dog.ceo/api/breed/${data}/images/random`
);
const res2 = superagent.get(
`https://dog.ceo/api/breed/${data}/images/random`
);
const res3 = superagent.get(
`https://dog.ceo/api/breed/${data}/images/random`
);
const all = await Promise.all([res1, res2, res3]);

## try-catch in JS
