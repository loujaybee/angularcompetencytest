const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.use(express.static(__dirname));

app.get('api/userdata', require('./server/userdata/post.js'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 8080);