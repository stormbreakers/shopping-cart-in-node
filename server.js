var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config/config'); // get our config file
var User   = require('./app/models/User'); // get our mongoose model

var port = process.env.PORT || 3000; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

app.use(express.static(__dirname + '/'));                 // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
require('./app/routes/routes')(app);

app.listen(port);
console.log('Magic happens at http://localhost:' + port);