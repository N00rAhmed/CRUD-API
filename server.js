require('dotenv').config()
const express = require('express')



const mongoose = require('mongoose')

const taskRoutes = require('./routes/tasks')

const userRoutes = require('./routes/user')


const app = express()

let cors = require("cors");
app.use(cors());


app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/tasks', taskRoutes)
app.use('/api/user', userRoutes)

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


