var express = require("express");
var router = express.Router();
var feedController = require("../controllers/feed.controller");

router.get('/getTest', feedController.getTest);
router.post('/postTest', feedController.postTest);

module.exports = router;
