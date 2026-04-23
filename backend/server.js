const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Project = require('./models/Project');
const Skill = require('./models/Skill');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health check – confirms backend is reachable
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', mongo: process.env.MONGO_URI ? 'uri set' : 'MISSING' });
});

// Projects
app.get('/api/projects', async (req, res) => {
  try {
    await connectDB();
    const projects = await Project.find({});
    res.json(projects);
  } catch (err) {
    console.error('Projects error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

// Skills
app.get('/api/skills', async (req, res) => {
  try {
    await connectDB();
    const skills = await Skill.find({});
    res.json(skills);
  } catch (err) {
    console.error('Skills error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
