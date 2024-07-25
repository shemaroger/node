const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogs'); 

// Create a new blog
router.post('/', async (req, res) => {
  try {
    const { title, content, author, image } = req.body;
    const blog = new Blog({ title, content, author, image });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
