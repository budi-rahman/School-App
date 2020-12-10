const express = require("express")
const router = express.Router()
const Controller = require("../controllers/studentController")
const TeacherController = require("../controllers/teacherController")

router.get("/add", TeacherController.showAdd)

router.post("/add", TeacherController.addTeacher)

router.get("/edit/:id", TeacherController.showEditTeacher)

router.post("/edit/:id", TeacherController.editTeacher)

router.get("/delete/:id", TeacherController.delTeacher)

router.get("/", Controller.home)

module.exports = router