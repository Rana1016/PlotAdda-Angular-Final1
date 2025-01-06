const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const eventSchema = new mongoose.Schema({
    event_name: { type: String, required: true, trim: true },
    organizer_name: { type: String, required: true, trim: true },
    phone_no: { type: String, required: true, trim: true },
    event_date: { type: String, required: true, trim: true },
    event_time: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    venue_detail: { type: String, required: false },
}, { timestamps: true });

const event = mongoose.model("Event", eventSchema);
module.exports = event;