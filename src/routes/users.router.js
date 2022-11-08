var express = require("express");
var router = express.Router();
var usersController = require("../controllers/users.controller");

router.get('/getTest', usersController.getTest);
router.post('/postTest', usersController.postTest);
router.get('/prueba', (req, res, next) => res.send('200'));

module.exports = router;
