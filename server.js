const express = require('express');
const path = require('path');
const https = require('https');
// const http = require('http');
const app = express();
const fs = require('fs');
const process = require('process');
// const compression = require('compression');

// app.use(compression());

const port_number = Number.parseInt(process.argv[2], 10);

const options = {
    ca: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.ca-bundle'),
    key: fs.readFileSync('Config/sammyjaved_com/example_com.key'),
    cert: fs.readFileSync('Config/sammyjaved_com/sammyjaved_com.crt'),
};

// HTTPS redirect now handled by nginx web server
// app.use (function (req, res, next) {
//     if (process.env.environment === 'local') {
//         console.log("local env, no redirect necessary");
//         next();
//     } else {
//         if (req.protocol === 'https') {
//             // request was via https, so do no special handling
//             next();
//         } else {
//             // request was via http, so redirect to https
//             res.redirect('https://' + req.headers.host + req.url);
//         }
//     }    
// }); 

// Allow direct URL lookups
app.use(express.static(path.join(__dirname, 'build'))); 

app.get('/*', function (req, res) {
//     const isNotProduction = !(process.env.environment === "production");
//     const shouldRedirect = !isNotProduction && (req.headers.host !== 'sammyjaved.com' 
//       || req.hostname !== 'sammyjaved.com' || req.protocol !== 'https');

//     if (shouldRedirect) {
//         res.redirect('https://sammyjaved.com');
//     }

    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/morph', function (req, res) {
    res.send("I am the /morph endpoint");
});

if (Number.isInteger(port_number)) {
	try {
        const port_num = port_number || '8123';
        https.createServer(options, app).listen(port_number);
        // if (process.env.environment === 'local' || port_number === 80) {
        //     http.createServer({}, app).listen(port_number);
        // } else {
        //     const port_num = port_number || '8123';
        //     https.createServer(options, app).listen(port_num);
        //     //if (process.env.environment === 'production') {
        //     //    http.createServer({}, app).listen(80);
        //     // }
        // }
    } catch (e) {
	    console.log(e.toString());
    }
} else {
	console.log("Invalid port number");
}
