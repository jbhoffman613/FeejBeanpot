var express = require('express'),
bodyParser = require('body-parser')
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://localhost/gc';
//var mongoUri = 'mongodb://master:cs4500&mike@cluster0-shard-00-00-v5tfa.mongodb.net:27017,cluster0-shard-00-01-v5tfa.mongodb.net:27017,cluster0-shard-00-02-v5tfa.mongodb.net:27017/gc?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('error', function() {
    throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();
app.use(bodyParser.json());
app.set('json spaces', 2);

require('./models/gc');
require('./routes')(app);

app.listen(3000);
console.log("Listening on port 3000")
