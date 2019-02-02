const express = require('express');
const path = require('path');
const https = require('https');
const app = express();
const fs = require('fs');

const port_number = Number.parseInt(process.argv[2], 10);

const options = {
    ca: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.ca-bundle'),
    key: fs.readFileSync('Config/sammyjaved_com/example_com.key'),
    cert: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.crt'),
};

app.use(express.static(path.join(__dirname, 'build')));

if (Number.isInteger(port_number)) {
	console.log("Creating server at port " + port_number);
	https.createServer(options, app).listen(port_number);
} else {
	console.log("Invalid port number");
}

