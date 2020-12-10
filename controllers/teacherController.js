const model = require("../models/model_teacher")


class TeacherController {

    static home (req, res){
        model.getAll((err,data)=> {
            if (err){
                res.render("error",{data:err.message})
            }else {
                console.log(data)
                res.render("home",{data:data})
            }
        })
    }

    static addTeacher(req, res){
            model.addTeacher(req.body, (err) => {
                if (err){
                    res.render("error",{data:err.message})
                }else {
                    res.render("success",{data:"Berhasil di tambah"})
                }
        })
    }

    static showAdd(req, res){
        res.render("add-teacher")
    }

    static delTeacher(req, res){
        model.deleteTeacher(req.params.id, (err) => {
            if(err){
                res.render("error",{data:err.message})
            }else {
                res.render("success",{data:"Berhasil didelete"})
            }
        })
    }

    static editTeacher(req, res){
        model.updateTeacher(req.body, (err)=> {
            if (err){
                res.render("error",{data:err.message})
            } else {
                res.render("success",{data:"Data berhasil di update"})
            }
        })
    }

    static showEditTeacher(req, res){
        model.getTeacher(req.params.id, (err,data) => {
            if (err){
                res.render("error",{data:err.message})
            }else {
                res.render("edit-teacher",{data:data})
            }
        })
    }


}


module.exports = TeacherController