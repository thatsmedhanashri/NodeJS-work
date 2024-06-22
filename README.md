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
__dirname gives working directory name

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
