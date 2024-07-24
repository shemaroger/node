const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/blogs', blogRoutes);

// Define a root route
app.get('/', (req, res) => {
  res.send('Welcome to the Blog API!');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
