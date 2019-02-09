const express = require('express');
const path = require('path');
const https = require('https');
const app = express();
const fs = require('fs');
const morganBody = require('morgan-body');
const bodyParser = require('body-parser');
const process = require('process');
require('dotenv').config();

if (process.env.environment === 'local' ||
    process.env.environment === 'development') {
    app.use(bodyParser.json());
    morganBody(app);
}

const port_number = Number.parseInt(process.argv[2], 10);

const options = {
    ca: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.ca-bundle'),
    key: fs.readFileSync('Config/sammyjaved_com/example_com.key'),
    cert: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.crt'),
};

app.use(express.static(path.join(__dirname, 'build')));

if (Number.isInteger(port_number)) {
	console.log("Creating server at port " + port_number);
	try {
        https.createServer(options, app).listen(port_number);
    } catch (e) {
	    console.log(e.toString());
    }
} else {
	console.log("Invalid port number");
}

