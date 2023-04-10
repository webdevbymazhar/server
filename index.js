const express= require('express')
const app = express()
const mongoose = require('mongoose')
const StudentsRoutes = require('./Routes/Students')
const cors = require('cors')
const dotenv = require('dotenv')


app.use(cors())
dotenv.config()

// cors => cross origin resourse sharing

app.use(express.json())


// Routes Middlewares
app.use('/api/students',StudentsRoutes)


app.get("/",(req,res)=>{
    res.send("Mazhar Server is running")
})





mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Connected to DB!")).catch(()=>console.log("Not Connected!"))


app.listen(4600,()=>{
    console.log("Server is Running")
})