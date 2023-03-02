

var express = require('express');
var mongoose = require('mongoose');
// Connect to database

mongoose.connect(`mongodb+srv://pavani:Evoke123@cluster0.imgabuw.mongodb.net/?retryWrites=true&w=majority`)
	.then(() => console.log('Connected!'));



var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Authorization,Access-Token,Refresh-Token,User-Agent,Browser');
    res.setHeader('Access-Control-Expose-Headers', 'Origin,X-Requested-With,content-type,Authorization,Access-Token,Refresh-Token,User-Agent,Browser');
    next();
});

app.use('/api/users', require('./src/app/employee.route'));

app.listen('9000', function () {
	console.log('Express server listening on %d, in %s mode', 9000, app.get('env'));
});

exports = module.exports = app;
