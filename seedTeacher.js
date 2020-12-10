const pool = require('./config/connection')
const fs =  require("fs")

let teacher_data = JSON.parse(fs.readFileSync('./data/teachers.json', 'utf-8'))
let query = `
INSERT INTO "Teacher" (first_name, last_name, email, gender) VALUES
`

for(let i = 0; i < teacher_data.length; i++){
    let first_name = teacher_data[i].first_name
    let last_name = teacher_data[i].last_name
    let email = teacher_data[i].email
    let gender = teacher_data[i].gender

    query += `('${first_name}','${last_name}','${email}','${gender}')`
    if(teacher_data.length - 1 === i){
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