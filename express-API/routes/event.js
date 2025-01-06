var express = require('express');
var router = express.Router();
const eventModel = require('../models/event.model');

router.get('/', async (req, res) => {
  try {
    const event1 = await eventModel.find();
    res.status(200).json({ success: true, data: event1 });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch course", error: error.message });
  }
});

router.post('/', async (req, res)=>{
  const { event_name, organizer_name, event_date,event_time, phone_no, type, venue_detail } = req.body;
  try{
    const event = new eventModel({ event_name, organizer_name, event_date,event_time, phone_no, type, venue_detail })
    await event.save()
    res.status(200).json({success:true,message: "Event added successfully", data: res.body})
  }catch(error){
    res.status(500).json({success:false, message:req.body, error: error.message})
  }
})

module.exports = router;