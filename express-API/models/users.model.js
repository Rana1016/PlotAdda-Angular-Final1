// models/user.model.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
   name: { type: String, required: true, trim: true },
    // last_name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    // phone_no: { type: String, required: true, trim: true },
    // courses: { type: String, required: true, trim: true },
    // address: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    // confirm_password: { type: String, required: true },
    role: { type: String, default: 'user' },
    // approve: { type: String, default: 'pending' }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        this.confirm_password = hashedPassword;
    }
    next();
});

userSchema.methods.isValidPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};


const User = mongoose.model("User", userSchema);
module.exports = User;
