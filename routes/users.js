var express = require('express');
var usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

usersRouter.get('/test', function (req, res, next) {
  res.send('this is test');
});

module.exports = usersRouter;