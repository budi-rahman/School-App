const model = require("../models/model_students")


class Controller {

    static home (req, res){
        model.getAll((err,data)=> {
            if (err){
                res.send(err)
            }else {
                console.log(data)
                res.render("home",{data:data})
            }
        })
    }

    static addStudent(req, res){
            model.addStudent(req.body, (err) => {
                if (err){
                    res.send(err.message)
                }else {
                    res.send("Berhasil di tambah")
                }
        })
    }

    static showAdd(req, res){
        res.render("add-student")
    }

    static delStudent(req, res){
        model.deleteStudent(req.params.id, (err) => {
            if(err){
                res.send(err.message)
            }else {
                res.send("Berhasil didelete")
            }
        })
    }

    static editStudent(req, res){
        model.updateStudent(req.body, (err)=> {
            if (err){
                res.send(err.message)
            } else {
                res.send(req.body)
            }
        })
    }

    static showEditStudent(req, res){
        model.getStudent(req.params.id, (err,data) => {
            if (err){
                res.send(err)
            }else {
                res.render("edit-student",{data:data})
            }
        })
    }


}


module.exports = Controller