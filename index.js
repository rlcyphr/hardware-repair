// for node.js serving of the website


// Importing dependencies



const path = require('path');
const express = require('express');
const app = express();
const port = 9000;

// define the base directory

__dirname = path.resolve(path.dirname('')); // base for the project as a whole.
__files = __dirname+'/views'; // the base directory for all HTML files

console.log(__dirname,"is the current directory."); 
app.use(express.static(__dirname + '/public')); // the default path for additional files that are not part of the HTML pages



app.get('/', (req, res) => {

    res.send("Hello World!"); // when requests are made to the root path, the server will respond with the string "Hello World!"

})


app.get('/index', (req, res) => {

    res.sendFile(__files+'/index.html');
    // res.sendFile returns this file when the endpoint shown in the parameters is accessed
    // this endpoint is accessed relative to the base directory specified by __dirname
})



app.listen(port, () => {

    console.log(`Listening on port ${port}`);
})