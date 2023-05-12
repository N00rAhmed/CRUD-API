require('dotenv').config()
const express = require('express')

let cors = require("cors");
app.use(cors());



const mongoose = require('mongoose')

const taskRoutes = require('./routes/tasks')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/tasks', taskRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to DB and listening on port 4000')
    })
    
})
.catch((error) => {
    console.log(error)
})


