const express = require('express');
const path = require('path');
const https = require('https');
const http = require('http');
const app = express();
const fs = require('fs');

const port_number = Number.parseInt(process.argv[2], 10)

const options = {
    ca: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.ca-bundle'),
    key: fs.readFileSync('Config/sammyjaved_com/example_com.key'),
    cert: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.crt'),
};


app.use(express.static(path.join(__dirname, 'build')));

// respond with certifcate number when a GET request is made to the homepage
app.get('/.well-known/pki-validation/9F2F8C2065C8A044C6CE2027826598AA.txt', function (req, res) {
  res.sendfile('/.well-known/pki-validation/9F2F8C2065C8A044C6CE2027826598AA.txt')
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/.well-known/pki-validation/file.txt', function (req, res) {
  res.sendfile('/.well-known/pki-validation/file.txt')
});

// sammy express middlewhere
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});

if (Number.isInteger(port_number)) {
	console.log("Creating server at port " + port_number);
	http.createServer(app).listen(3004);
	https.createServer(options, app).listen(port_number);
} else {
	console.log("Invalid port number");
}

