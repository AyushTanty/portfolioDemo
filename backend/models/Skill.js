const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  tags: [{ type: String, required: true }]
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
