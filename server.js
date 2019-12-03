/*
 * Server File
 */


var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
// add JSON file that stores posts
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.status('200');
    res.render('home');
});

// add any other redirects

app.get('*', function (req, res) {
    res.status('404');
    res.render('404');
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });
