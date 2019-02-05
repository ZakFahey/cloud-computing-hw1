const express = require('express');
const api = require('./api');
const app = express();

app.use(express.static('static'));
app.use('/api', api);

// Run the web server
app.listen(8000);