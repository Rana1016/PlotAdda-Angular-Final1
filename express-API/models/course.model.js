const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const courseSchema = new mongoose.Schema({
    course_name: { type: String, required: true, trim: true },
    trainer_name: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    trainer_phone_no: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    starting_date: { type: String, required: true },
}, { timestamps: true });

const course = mongoose.model("Course", courseSchema);
module.exports = course;