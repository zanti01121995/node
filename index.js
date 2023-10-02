const express = require('express')
const app = express()
const fs = require("fs");
const text = "Here i created some contents in side the folder files for sample files"

fs.writeFile('./contents/sample.txt', text, (err) => {
    if (err) throw err;
    console.log("Completed writing sample.txt");
});

fs.readFile('./contents/sample.txt', "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(5000, () => { console.log('listening on port 5000') })