var express = require('express');
var router = express.Router();
const Controller = require("../controllers/studentController")

/* GET home page. */
router.get('/', Controller.home);

module.exports = router;