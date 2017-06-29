const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.get('/userdata', require('./server/userdata/post.js'));

app.listen(process.env.PORT || 8080);