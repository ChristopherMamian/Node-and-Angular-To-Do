var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');

app.use(express.static(__dirname + '/public'));
