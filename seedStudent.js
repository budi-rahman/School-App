const pool = require('./config/connection')
const fs =  require("fs")

let student_data = JSON.parse(fs.readFileSync('./data/students.json', 'utf-8'))
let query = `
INSERT INTO "Student" (first_name, last_name, email, gender, birthdate) VALUES
`

for(let i = 0; i < student_data.length; i++){
    let first_name = student_data[i].first_name
    let last_name = student_data[i].last_name
    let email = student_data[i].email
    let gender = student_data[i].gender
    let birthdate = student_data[i].birthdate

    query += `('${first_name}','${last_name}','${email}','${gender}','${birthdate}')`
    if(student_data.length - 1 === i){
        query += ';'
    } else {
        query += ','
    }
}

console.log(query)
pool.query(query, (err, res) => {
    if (err) console.log(err)
    else console.log('success seeding data')
})