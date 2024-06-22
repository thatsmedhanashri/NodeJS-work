
const fs = require('fs')

// Reading file without callback function i.e. synchronously
/*const inputText = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log("Input file text -> ", inputText)*/
// ES6 syntax
/*const outputText = `This is all we know about Avacado: ${inputText} \nCreated on: ${Date.now()}`
fs.writeFileSync('./txt/output.txt', outputText)*/

// Reading file with callback function i.e. asnchronously
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
console.log("Reading file data....")