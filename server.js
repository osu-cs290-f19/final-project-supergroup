/*
 * Server File
 */


var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Parse JSON file
var rawJson = fs.readFileSync('./userPosts.json', 'utf8');
var postsArray = JSON.parse(rawJson);

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.status('200');
    res.render('home');
});

app.get('/browse', function (req, res) {
    res.status('200');
    res.render('browse', {
		showsearch: true, 
		post: postsArray
		});
});

app.get('/posts/:postNum', function (req, res, next) {
	var postNum = req.params.postNum;
	if (+postNum >= 0 && +postNum < +postsArray.length) {
		res.render('browse', {
		showsearch: false,
		post: [postsArray[postNum]]
	});
	}
	else {
		next();
	}
});

app.get('/about', function (req, res) {
    res.status('200');
    res.render('about');	
});

// add any other redirects

app.get('*', function (req, res) {
    res.status('404');
    res.render('404');
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });
