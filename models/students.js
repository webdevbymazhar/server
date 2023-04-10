const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    name:String,
    rollNo:Number
})





module.exports = mongoose.model('students',studentSchema)