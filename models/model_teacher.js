const pool = require("../config/connection")

class model {

    static getAll (cb){
        const query = `select * from "Teacher"`

        pool.query(query, (err,res) => {
            if (err){
                console.log(err)
                cb(err)
            }else {
                cb(null, res.rows)
            }
        })
    }

    static getTeacher (id, cb){
        var query = `select * from "Teacher" where id = ${id}`

        pool.query(query, (err,res) => {
            if (err){
                cb(err)
            }else {
                cb(null, res.rows)
            }
        })
    }

    static updateTeacher(data, cb){

        var updateq = `UPDATE "Teacher"
        SET first_name = "${data.first_name}",
        SET last_name = "${data.last_name}",
        SET email = ${data.email},
        SET gender = ${data.gender}
        WHERE course_id = ${data.id};`
    }

    static deleteTeacher(id, cb){
        var query = `DELETE FROM "Teacher" WHERE id = ${id};`
        pool.query(query, (err,res) => {
            if (err){
                cb(err)
            }else {
                cb(null)
            }
        })

    }

    static addTeacher(data, cb){
        var queryadd = `INSERT INTO "Teacher" (first_name, last_name, email, gender) VALUES ('${data.first_name}','${data.last_name}','${data.email}','${data.gender}');`
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