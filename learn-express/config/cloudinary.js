const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const Blog = require('./models/blog'); // Adjust the path to your Blog model

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dvs2go95q',
  api_key: '844354645278642',
  api_secret: 'C_Tef8yzjtRE2HVjRCYulc0njLQ'
});

// Configure multer-storage-cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blogs',
    allowedFormats: ['jpg', 'png', 'jpeg']
  }
});

const upload = multer({ storage: storage });

// POST route for uploading image and creating blog
router.post('/blogs', upload.single('image'), async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const { secure_url, public_id } = req.file; // Cloudinary response

    const newBlog = new Blog({
      title,
      content,
      author,
      image: {
        url: secure_url,
        public_id: public_id
      }
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
