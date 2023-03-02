
var express = require('express');
var app = express();


    app.use('/api/users', require('./src/app/employee.route'));


app.get('/calendar', (req, res) => {
    console.log(req.body)
})
exports = module.exports = app;// JavaScript source code


