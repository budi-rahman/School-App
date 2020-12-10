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
        if (!validateEmail(req.body)){
            res.send("Email tidak boleh kosong atau salah")
        } else if (!validateDate(req.body.date)){
            res.send("format date salah")
        }else {
            model.addStudent(req.body, (err) => {
                if (err){
                    res.send(err.message)
                }else {
                    res.send("Berhasil di tambah")
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