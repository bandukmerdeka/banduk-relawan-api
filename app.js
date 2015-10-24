var expresss = require('express');
var cors = require('cors');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('bandukrelawanapi', 'admincPQhPYe', 'alMmxvwvehp2', {
  host: process.env.OPENSHIFT_MYSQL_DB_HOST || 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
var app = expresss();

var Province = sequelize.import(__dirname + "/models/province.js")

app.use(cors());

app.get('/', function (req, res) {
  res.send('nothing is here');
});

app.get('/about', function (req, res) {
  res.send('about');
});

app.get('/api/provinsi', function (req, res) {
  Province.findAll().then(function (provinces) {
    res.json({
      "data": provinces
    });
  });
})

var server = app.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000, process.env.OPENSHIFT_NODEJS_IP || 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});