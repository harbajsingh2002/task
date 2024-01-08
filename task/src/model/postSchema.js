const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Corrected type definition
    ref: "User",
    required: true,
  },
  title: {
    type: String,
  },
});

module.exports = mongoose.model('Post', UserSchema); // Corrected export
