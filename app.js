var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cheerio = require('cheerio');
var axios = require('axios');
var path = require('path');

var app = express();
var router = express.Router();
app.use(express.static(__dirname + '/public'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
var PORT = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
// app.get('/', function(req, res) {
//   res.redirect('home');
// });
require('./config/routes')(router);
const db = process.env.MONGODB_URI || 'mongodb://localhost/mongoHead';

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },

  function(error) {
    if (error) {
      console.log('error');
    } else {
      console.log('mongo connetion is successful');
    }
  }
);

app.listen(PORT, function() {
  console.log(`This application is running on port: ${PORT}`);
});
