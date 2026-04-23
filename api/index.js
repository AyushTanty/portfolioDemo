// This is the Vercel serverless function entry point.
// It imports and exports the Express app from the backend folder.
const app = require('../backend/server');

module.exports = app;
