const model = require("../models/model_students")
const model_teacher = require("../models/model_teacher")


class Controller {

    static home (req, res){
        var student = null
        var teacher = null
        model.getAll((err,data)=> {
            if (err){
                res.render("error",{data:err.message})
            }else {
                student = data
            }
        })
        
        model_teacher.getAll((err,teachers)=> {
            if (err){
                res.render("error",{data:err.message})
            }else {
                teacher = teachers
            }
            res.render("home",{data:{student,teacher}})
        })
    }

    static addStudent(req, res){
        if (!validateEmail(req.body)){
            res.render("error",{data:"Email tidak boleh kosong atau salah"})
        } else if (!validateDate(req.body.date)){
            res.render("error",{data:"format date salah"})
        }else {
            model.addStudent(req.body, (err) => {
                if (err){
                    res.render("error",err.message)
                }else {
                    res.render("success",{data:"Berhasil di tambah"})
                }
            })
        }
    }

    static showAdd(req, res){
        res.render("add-student")
    }

    static delStudent(req, res){
        model.deleteStudent(req.params.id, (err) => {
            if(err){
                res.render("error",{data:err.message})
            }else {
                res.render("success",{data:"Berhasil didelete"})
            }
        })
    }

    static editStudent(req, res){
        model.updateStudent(req.body, (err)=> {
            if (err){
                res.render("error",{data:err.message})
            } else {
                res.render("success",{data:"Data berhasil di update"})
            }
        })
    }

    static showEditStudent(req, res){
        model.getStudent(req.params.id, (err,data) => {
            if (err){
                res.render("error",{data:err.message})
            }else {
                res.render("edit-student",{data:data})
            }
        })
    }


}

function validateEmail(data){
    console.log(data)
    if(data.email == ""){
        return false
    } else if (!validateEmailstructure(data.email)){
        console.log("Malfunctioned email")
        return false
    }

    return true
}

function validateDate(date){

    var date_regex = /^(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])\-(19|20)\d{2}$/;
    var date_regex2 = /^(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])\-(19|20)\d{2}$/;
    if (!(date_regex.test(date)) && date_regex2.test(date)) {
        return false;
    }
    return true
}

function validateEmailstructure(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




module.exports = Controller