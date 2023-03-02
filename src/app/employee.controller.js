'use strict';

var User = require('./employee.modal');


exports.index = function (req, res) {
    User.find({},function (err, users) {
        if (err) return res.status(500).send(err);
        res.status(200).json(users);
    });
};


exports.create = function (req, res, next) {
    console.log(req.body,"claled")
    var newUser = new User(req.body);
    console.log(newUser)
    newUser.save(function (err, user) {
        console.log(err)
        if (err) return res.status(500).send(err)
        if (user) res.status(200).send({ message: "Success" })
    });
};

exports.getCalendarTypes = function (req, res) {
    let data = [
        {
            "id": 1,
            "title": "Work",
            "assignedColor": "#000000"
        }]
    res.status(200).json(data);
};

exports.getEmployeeEvents = function (req, res) {

    let responseData = [{
        "id": 1001,
        "calendarId": 1,
        "endDate": "2023-02-27T11:30:00.000Z",
        "startDate": "2023-02-27T10:30:00.000Z",
        "title": "test"
    }]
    res.status(200).json(responseData);
};

