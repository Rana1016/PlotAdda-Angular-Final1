var express = require('express');
var router = express.Router();
const User = require("../models/users.model")

/* GET users listing. */
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch users", error: error.message });
  }
});


/* POST users listing. */
router.post('users/add', async (req, res) => {
  const { firstName, lastName, email, phoneNo, courses, address, password, confirm_password, role, approve } = req.body;

  if (password !== confirm_password) {
    return res.status(400).json({ success: false, message: "Passwords do not match" });
  }

  try {
    let user = new User({ firstName, lastName, email, phoneNo, courses, address, password, role, approve });
    await user.save();
    res.status(201).json({ success: true, message: 'User added successfully', userDetails: user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to add user', error: error.message });
  }
});


/* PUT users listing. */
router.put('/users/update/:id', async (req, res) => {
  const userId = req.params.id;
  const updates = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, message: 'User updated successfully', userDetails: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to update user', error: error.message });
  }
});



/* DELETE users listing. */
router.delete('/users/delete/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to delete user', error: error.message });
  }
});


/* Search users listing. */
router.get('/users/search', async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, message: 'User found', userDetails: user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Search failed', error: error.message });
  }
});


module.exports = router;
