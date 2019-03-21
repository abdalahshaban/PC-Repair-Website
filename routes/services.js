var express = require('express');
var servicesRouter = express.Router();
var fs = require('fs');


var results;

fs.readFile('json/services.json', 'utf8', (err, data) => {
    if (err) {
        throw err
    } else {
        results = JSON.parse(data)
    }
})

/* GET services page. */
servicesRouter.get('/', function (req, res, next) {
    res.render('services', {
        title: 'services',
        services: results
    });
});

module.exports = servicesRouter;