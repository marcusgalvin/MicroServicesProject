var express = require('express');
var app = express();
// var router = require('./routers/router');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send("simple api gateway test")
})

// app.use(router);
console.log("simple api gateway running on localhost3000")

app.listen(3000);