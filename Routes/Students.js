const router = require('express').Router()
const StudentModel = require('../models/students')




router.post('/enroll',async (req,res)=>{
    const {name,rollNo} = req.body
    await StudentModel.create({name,rollNo})
    res.json({
        message:"User Saved",
        success:true
    })
})


router.delete('/:id', async(req,res)=>{
    await StudentModel.findByIdAndDelete(req.params.id)
    res.send("Student Deleted")
})


router.get("/",async (req,res)=>{
    var students =  await StudentModel.find()
    res.json(students)
})



module.exports = router