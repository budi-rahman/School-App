const pool = require("./connection")

const student_table = `CREATE TABLE "Student" (
	id serial PRIMARY KEY,
	first_name VARCHAR ( 50 ) NOT NULL,
	last_name VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 50 ) NOT NULL,
	gender VARCHAR (20) NOT NULL,
    birthdate VARCHAR ( 50 ) NOT NULL
);`

 pool.query(student_table, () => {
     
 })