const express = require('express')
const app = express()
const fs = require("fs");
const timestamp = new Date().toDateString();
const text = `this is the content which includes the timestamp data ==>> ${timestamp} as the file name`

console.log("timestamp data", timestamp);


//////api to write the file inside the folder////////////
app.get('/write', function (req, res) {
    res.send('Hello World')
    fs.writeFile(`./contents/sample_${timestamp}.txt`, text, (err) => {
        if (err) throw err;
        console.log(`Completed writing sample_${timestamp}.txt`);
    });
})
//////api to read the filename inside the folder////////////
app.get('/read', (req, res) => {
    fs.readdir('./contents', "utf-8", (err, data) => {
        if (err) throw err;
        console.log("read", data);
    })

})

app.listen(5000, () => { console.log('listening on port 5000') })