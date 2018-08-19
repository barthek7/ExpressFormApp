var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());
app.use('/store', function(req,res, next){
    console.log('Hey I\'m a middleware to /store request!');
    next();
})

app.get('/', function(req, res){
    res.sendFile('/index.html')
});

app.get('/userform', function(req, res){
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }
    res.end(JSON.stringify(response));
});

app.get('/store', function(req,res){
    res.send('Hi I\'m the store endpoint!');
})



var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Application is listening on http://' + host + ':' + port);
});