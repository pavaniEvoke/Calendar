'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    title: String,
    startDate: Date,
    endDate: Date,
});


module.exports = mongoose.model('events', UserSchema);// JavaScript source code
