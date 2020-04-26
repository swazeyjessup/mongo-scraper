var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');

// Scraping tools
var request = require('request');
var cheerio = require('cheerio');

// Requiring Note and Article models
var db = require("./models");

// Set mongoose to leverage built-in ES6 Promise
mongoose.Promise = Promise;

var PORT = process.env.PORT || 3030;

var app = express();

// Use morgan and body parser middleware
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main", partialsDir: path.join(__dirname, "/views/layouts/partials")}));
app.set('view engine', 'handlebars');

mongoose.connect(MONGODB_URI);
var conn = mongoose.connection;

conn.on('error', function(error) {
    console.log('Mongoose error: ', error);
});

conn.once('open', function() {
    console.log('Mongoose connection successful.');
});



// Start the server
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}!`);
})