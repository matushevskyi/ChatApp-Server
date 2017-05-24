const mongoose = require('mongoose');
var config = require('./config');

mongoose.Promise = global.Promise;

mongoose.connect(config.mongodb_url, (err) => {
   if(err) console.log(error);
   console.log("Connected correctly to server");
});