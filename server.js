
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Parse JSON file
var rawJson = fs.readFileSync('./userPosts.json', 'utf8');
var postsArray = JSON.parse(rawJson);

var emptyPost = fs.readFileSync('./emptyPost.json', 'utf8');
var emptyArray = JSON.parse(emptyPost);

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.status(200);
    res.render('home');
});

app.get('/search/:result',function(req,res,next){
	var search = req.params.result;
	if (search.split("%20").length < 1 || search.split("%20")[0]=="") {
		next();
	} else {
		search = search.split("%20");
		search = search.join(" ");
		posts = preparse(postsArray,search)
		if (posts.length < 1){
			posts = emptyArray;
		}
		res.status(200);
		res.render('browse', {
			showsearch: false,
			post: posts
		});
	}
});

app.get('/browse', function (req, res) {
    res.status(200);
    res.render('browse', {
		showsearch: true,
		post: postsArray
	});
});

app.get('/posts/:postNum', function (req, res, next) {
	var postNum = req.params.postNum;
	var index = postsArray.length - (+postNum + 1);
	
	if (+index >= 0 && +index < +postsArray.length) {
		var showPost = Object.assign({'showbody': true}, postsArray[index]);
		res.render('browse', {
			showsearch: false,
			post: [showPost]
		});
	} else {
		next();
	}
});

app.get('/post', function (req, res) {
	res.status(200);
	res.render('addPost');
});

app.get('/about', function (req, res) {
    res.status('200');
    res.render('about');	
});

app.post('/get-post-num', function(req, res) {
	var newPostNum = postsArray.length;
	res.status(200).send(newPostNum.toString());
});

app.post('/add-post', function (req, res) {
	if (req.body && req.body.postNum && req.body.title && req.body.class && req.body.term && req.body.year && req.body.professor && req.body.uploadDate && req.body.body && req.body.resource) {
		console.log("== Client added the following post:");
		console.log("   - postNum:", req.body.postNum);
		console.log("   - title:", req.body.title);
		console.log("   - class:", req.body.class);
		console.log("   - term:", req.body.term);
		console.log("   - year:", req.body.year);
		console.log("   - professor:", req.body.professor);
		console.log("   - uploadDate:", req.body.uploadDate);
		console.log("   - body:", req.body.body);
		console.log("   - resource:", req.body.resource);

		postsArray.unshift(req.body);
		fs.writeFileSync('./userPosts.json', JSON.stringify(postsArray, null, 2), 'utf-8');
		res.status(200).send("Post added");
	} else {
		console.log("== Client sent bad post data, returned status code 400");
		console.log(req.body);
		res.status(400).send("ERROR");
	}
});

app.get('*', function (req, res) {
    res.status(404);
    res.render('404');
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});



function preparse(postsArray,searchtext) {
	searchtext = searchtext.toLowerCase();
	var newArray = [];
	for (var i=0; i<postsArray.length;i++) {
		var title = postsArray[i].title.toLowerCase();
		if (title.indexOf(searchtext.toLowerCase())>=0) {
			newArray.push(postsArray[i]);
		}
	}
	return newArray;
}
