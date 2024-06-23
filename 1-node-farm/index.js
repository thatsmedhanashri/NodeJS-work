const fs = require("fs");
const http = require("http");
const url = require("url");

const slugify = require("slugify");

const replaceTemplate = require("./modules/replaceTemplate");
const { stringify } = require("querystring");
// Reading file without callback function i.e. synchronously
/*const inputText = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log("Input file text -> ", inputText)*/
// ES6 syntax
/*const outputText = `This is all we know about Avacado: ${inputText} \nCreated on: ${Date.now()}`
fs.writeFileSync('./txt/output.txt', outputText)*/

// Reading file with callback function i.e. asnchronously
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     if(err){
//         return console.log("Error while reading start.txt!")
//     }else{
//         fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data1) => {
//             fs.readFile('./txt/append.txt', 'utf-8', (err, data2) => {
//                 fs.writeFile('./txt/final.txt', `${data1}\n${data2}`, 'utf-8', (err) => {
//                     console.log("File written complete!")
//                 })
//             })
//         })
//     }
// })
// console.log("Reading file data....")

// http module
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, "utf-8");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // slugify use
  console.log(slugify("some string"));
  console.log(slugify("some string&&", "_"));

  // Overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const cardsHtml = dataObj
      .map((product) => {
        return replaceTemplate(tempCard, product);
      })
      .join("");
    output = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);
    res.end(output);

    // Product page
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  } else if (req.pathname === "/api") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "custom-header1": "header1-value",
    });
    res.end("<h1>Page not found!!</h1>");
  }
});
server.listen("8000", "127.0.0.1", () => {
  console.log("listening to port 8000");
});
