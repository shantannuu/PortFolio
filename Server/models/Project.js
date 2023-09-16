const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  // Add other fields as needed
});

module.exports = mongoose.model('Project', projectSchema);
