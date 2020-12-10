const express = require("express")
const router = express.Router()
const Controller = require("../controllers/studentController")

router.get("/add", Controller.showAdd)

router.post("/add", Controller.addStudent)

router.get("/edit/:id", Controller.showEditStudent)

router.post("/edit/:id", Controller.editStudent)

router.get("/delete/:id", Controller.delStudent)

router.get("/", Controller.home)

module.exports = router