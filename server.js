var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require('mongoose'),
  User = require('./api/models/userDataModel'),
  bodyParser = require('body-parser');
  
    

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest_apis'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/userDataRoutes');
routes(app);


app.listen(port);


console.log('user data RESTful API server started on: ' + port);
