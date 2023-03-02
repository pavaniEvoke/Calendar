

var express = require('express');
var controller = require('./employee.controller');

var router = express.Router();


router.post('/', controller.create);

router.get('/', controller.index);

router.get('/getCalendarTypes', controller.getCalendarTypes);



module.exports = router;