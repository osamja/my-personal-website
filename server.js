const express = require('express');
const path = require('path');
const https = require('https');
const app = express();
const fs = require('fs');
const process = require('process');
const compression = require('compression');

app.use(compression()); // until we replace this file with nginx 

const port_number = Number.parseInt(process.argv[2], 10);

const options = {
    ca: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.ca-bundle'),
    key: fs.readFileSync('Config/sammyjaved_com/example_com.key'),
    cert: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.crt'),
};

// Allow direct URL lookups
app.use(express.static(path.join(__dirname, 'build'))); 

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

if (Number.isInteger(port_number)) {
	try {
        https.createServer(options, app).listen(port_number);
    } catch (e) {
	    console.log(e.toString());
    }
} else {
	console.log("Invalid port number");
}
