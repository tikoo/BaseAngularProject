// server.js

/**  ===========================================================================
 **  Setup
 **  =========================================================================*/

    var express  = require('express');
    var app      = express();                               // create app w/ express
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)


/**  ===========================================================================
 **  Variables
 **  =========================================================================*/

    var homePage = './public/index.html';
    var homeDirectory = '/public';

/**  ===========================================================================
 **  Configuration
 **  =========================================================================*/

    app.use(express.static(__dirname + homeDirectory));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

/**  ===========================================================================
 **  General API
 **  =========================================================================*/

 	var http = require("http");
    var request = require("request"); // helps with http requests
    var router = express.Router();

    app.use('/api', router);


    // Doubles a number and returns it
    router.get('/doubleNumber/:num', function(req, res) {

    	console.log('the num is: ' + req.params.num);
    	var newNum = req.params.num * 2;

    	var response = {
    		'number' : newNum
    	};
    	res.send(response);


    });

/**  ===========================================================================
 **  Run Application
 **  =========================================================================*/

app.get('/', function(req, res) {
    res.sendFile(homePage);
});

app.listen(8080);
console.log("App listening @ localhost:8080/");