const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'schApp',
  password: 'postgres',
  port: 5432,
})

// pool.query("SELECT NOW()", (err, res) => {
//     if(err) console.log(err)
//     else{
//         console.log(res.rows)
//         pool.end()
//     }
// })

module.exports = pool