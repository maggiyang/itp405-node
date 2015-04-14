var express = require('express');
var ejs = require('ejs');
var DvdController = require('./controllers/DvdController');

var app = express();
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Home'
    });
});

app.get('/dvds', DvdController.dvds);

app.listen(3000, function() {
   console.log('Listening on localhost:3000');
});



