const express = require('express');
const path = require('path');
const app = express();

const port_number = Number.parseInt(process.argv[2], 10)
console.log("Port: " + port_number);

app.use(express.static(path.join(__dirname, 'build')));

if (Number.isInteger(port_number)) {
	app.listen(port_number);
} else {
	console.log("Invalid port number");
}

