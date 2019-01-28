const express = require('express');
const path = require('path');
const app = express();

const port_number = Number.parseInt(process.argv[2], 10)
console.log("Port: " + port_number);

app.use(express.static(path.join(__dirname, 'build')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/.well-known/pki-validation/9F2F8C2065C8A044C6CE2027826598AA.txt', function (req, res) {
  res.sendfile('/.well-known/pki-validation/9F2F8C2065C8A044C6CE2027826598AA.txt')
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/.well-known/pki-validation/file.txt', function (req, res) {
  res.sendfile('/.well-known/pki-validation/file.txt')
});

if (Number.isInteger(port_number)) {
	app.listen(port_number);
} else {
	console.log("Invalid port number");
}

