var express = require("express");
var router = express.Router();
var chatController = require("../controllers/chat.controller");

router.get('/getTest', chatController.getTest);
router.post('/postTest', chatController.postTest);

module.exports = router;
