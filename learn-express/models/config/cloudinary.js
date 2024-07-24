const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret'
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blogs',
    allowedFormats: ['jpg', 'png', 'jpeg'],
  },
});

const upload = multer({ storage: storage });

module.exports = { cloudinary, upload };
