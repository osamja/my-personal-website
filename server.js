const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/books', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/html', 'books.html'));
});

app.listen(9000);
