var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

//Scraping tools
var request = require("request");
var cheerio = require("cheerio");

// Requiring Note and Article models
var db = require("./models");

// Set mongoose to leverage built-in ES6 Promise 
mongoose.Promise = Promise; 

var PORT = process.env.PORT || 3030;



//Start the server
app.listen(PORT, function() {
    console.log("App running on port ${PORT}!");
})