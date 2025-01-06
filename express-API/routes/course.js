var express = require('express');
var router = express.Router();
const Course = require('../models/course.model');

router.get('/', async (req, res) => {
  try {
    const course1 = await Course.find();
    res.status(200).json({ success: true, data: course1 });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch course", error: error.message });
  }
});

router.post('/', async (req, res)=>{
  const { course_name, trainer_name, duration, trainer_phone_no, type, starting_date } = req.body;
  try{
    const course = new Course({ course_name, trainer_name, duration, trainer_phone_no, type, starting_date })
    await course.save()
    res.status(200).json({success:true,message: "User registered successfully", data: res.body})
  }catch(error){
    res.status(500).json({success:false, message:req.body, error: error.message})
  }
})

module.exports = router;