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
app.use(express.static(__dirname + '/public')); 
// '/public' is the default root path for additional files that are not an HTML page
// express.js allows the nodejs server to serve requests for pages



// page gets

app.get('/', (req, res) => { // send the main page

    res.sendFile(__files+'/index.html');
    // res.sendFile returns this file when the endpoint shown in the parameters is accessed
    // this endpoint is accessed relative to the base directory specified by __dirname
})

app.get('/book', (req, res) => {

    res.sendFile(__files+'/book-repair.html');

})

// need pages for signup, log in, help, how to contact, apply for a repair, etc.





// app listen instruction

app.listen(port, () => {

    console.log(`Listening on port ${port}`);
})