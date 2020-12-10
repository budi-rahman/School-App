const pool = require("./connection")

const teacher_table = `CREATE TABLE "Teacher" (
	id serial PRIMARY KEY,
	first_name VARCHAR ( 50 ) NOT NULL,
	last_name VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 50 ) NOT NULL,
	gender VARCHAR (20) NOT NULL,
);`

pool.query(teacher_table, () => {
     
})