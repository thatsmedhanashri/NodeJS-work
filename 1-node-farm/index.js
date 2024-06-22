
const fs = require('fs')

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
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)
console.log("data - ", dataObj)

const http = require('http')
const server = http.createServer((req, res) => {
    console.log("req - ", req.url)
    if(req.url === '/' || req.url === '/overview'){
        res.end("This is overview")
    }else if(req.url === '/product'){
        res.end("This is product info")
    }else if(req.url === '/api'){
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(data)
    }else{
        res.writeHead(404, {
            'Content-type': 'text/html',
            'custom-header1': 'header1-value'
        })
        res.end("<h1>Page not found!</h1>")
    }
})
server.listen('8000', '127.0.0.1', () => {
    console.log("listening to port 8000")
})