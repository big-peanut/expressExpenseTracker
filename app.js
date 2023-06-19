const express=require('express')
const adminroutes=require('./routes/adminroutes')
const bodyparser=require('body-parser')
const sequelize=require('./util/database')
const cors = require('cors')

const app=express()

app.use(bodyparser.json())
app.use(cors())

app.use(adminroutes)

sequelize.sync()
    .then((res) => {
        app.listen(1000)
    })
    .catch((err) => {
        console.log(err)
    })
