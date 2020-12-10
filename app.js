const express = require('express')

const index = require('./routes/index')
const student = require('./routes/student')
const teacher = require('./routes/teacher')
const app = express()
const port = 3000

app.set("view engine","ejs")
app.use(express.urlencoded({extended : true}))

app.use("/",index)
app.use("/student", student)
app.use("/teacher", teacher)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})