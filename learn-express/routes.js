// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const { upload } = require('../config/cloudinary'); // Adjust the path if needed
// const Blog = require('../models/blog'); // Adjust the path to your Blog model

// // Upload image and create blog
// router.post('/', upload.single('image'), async (req, res) => {
//   try {
//     const { title, content, author } = req.body;
//     const image = req.file ? {
//       url: req.file.path,
//       public_id: req.file.filename
//     } : {};

//     const blog = new Blog({
//       title,
//       content,
//       author,
//       image
//     });

//     await blog.save();
//     res.status(201).json(blog);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get all blogs
// router.get('/', async (req, res) => {
//   try {
//     const blogs = await Blog.find();
//     res.status(200).json(blogs);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get a specific blog by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.status(200).json(blog);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Update a blog by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const { title, content, author } = req.body;
//     const blog = await Blog.findByIdAndUpdate(req.params.id, { title, content, author }, { new: true });
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.status(200).json(blog);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete a blog by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndDelete(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.status(200).json({ message: 'Blog deleted successfully' });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// module.exports = router;
