const express = require('express');
const path = require('path');
const https = require('https');
const http = require('http');
const app = express();
const fs = require('fs');
const morganBody = require('morgan-body');
const bodyParser = require('body-parser');
const process = require('process');
require('dotenv').config();

if (process.env.environment !== 'production') {
    app.use(bodyParser.json());
    morganBody(app);
}

const port_number = Number.parseInt(process.argv[2], 10);

const options = {
    ca: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.ca-bundle'),
    key: fs.readFileSync('Config/sammyjaved_com/example_com.key'),
    cert: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.crt'),
};

app.use (function (req, res, next) {
    if (req.protocol === 'https') {
        // request was via https, so do no special handling
        next();
    } else {
        // request was via http, so redirect to https
        res.redirect('https://' + req.headers.host + req.url);
    }
}); 

// Allow direct URL lookups
app.use(express.static(path.join(__dirname, 'build'))); 
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/morph', function (req, res) {
    // console.log("Request: ", req);
    debugger;
    console.log("sup man");
    res.send("I am the /morph endpoint");
});

if (Number.isInteger(port_number)) {
	// console.log("Creating server at port " + port_number);
	try {
        https.createServer(options, app).listen(port_number);
        if (process.env.environment === 'production') {
            http.createServer({}, app).listen(80);
        }

    } catch (e) {
	    console.log(e.toString());
    }
} else {
	// console.log("Invalid port number");
}
