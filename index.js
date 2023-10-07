const express = require('express')
const app = express()
const fs = require("fs");
const timestamp = Date.now();
const text = `this is the content which includes the timestamp data ==>> ${timestamp} as the file name`


fs.writeFile(`./contents/sample_${timestamp}.txt`, text, (err) => {
    if (err) throw err;
    console.log(`Completed writing sample_${timestamp}.txt`);
});

fs.readdir('./contents', "utf-8", (err, data) => {
    if (err) throw err;
    console.log("readsed", data);
})

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(5000, () => { console.log('listening on port 5000') })