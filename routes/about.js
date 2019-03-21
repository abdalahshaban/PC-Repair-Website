var express = require('express');
var aboutRouter = express.Router();

/* GET home page. */
aboutRouter.get('/', function (req, res, next) {
    res.render('about', {
        title: 'about',
        name: 'abdalah'
    });
});

module.exports = aboutRouter;