const express = require('express');
const router = express.Router();
const Blog = require('./models/Blog'); // Adjust the path as necessary

// Create a new blog
router.post('/', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).send(blog);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send();
    }
    res.status(200).send(blog);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a blog by ID
router.patch('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!blog) {
      return res.status(404).send();
    }
    res.status(200).send(blog);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a blog by ID
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).send();
    }
    res.status(200).send(blog);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
