const pool = require("../config/connection")

class model {

    static getAll (cb){
        const query = `select * from "Student"`

        pool.query(query, (err,res) => {
            if (err){
                console.log(err)
                cb(err)
            }else {
                cb(null, res.rows)
            }
        })
    }

    static getStudent (id, cb){
        var query = `select * from "Student" where id = ${id}`

        pool.query(query, (err,res) => {
            if (err){
                cb(err)
            }else {
                cb(null, res.rows)
            }
        })
    }

    static updateStudent(data, cb){

        var updateq = `UPDATE "Student"
        SET first_name = "${data.first_name}"
        SET last_name = "${data.last_name}"
        SET email = ${data.email}
        SET gender = ${data.gender}
        SET birthdate = ${data.birthdate}
        WHERE course_id = ${data.id};`
    }

    static deleteStudent(id, cb){
        var query = `DELETE FROM "Student" WHERE id = ${id};`
        pool.query(query, (err,res) => {
            if (err){
                cb(err)
            }else {
                cb(null)
            }
        })

    }

    static addStudent(data, cb){
        var queryadd = `INSERT INTO "Student" (first_name, last_name, email, gender, birthdate) VALUES ('${data.first_name}','${data.last_name}','${data.email}','${data.gender}','${data.birthdate}');`
        pool.query(queryadd, (err,res) => {
            if (err){
                cb(err)
            }else {
                cb(null)
            }
        })
    }

}

module.exports = model