  import multer from 'multer';
  import path from 'path';

  // Define storage for the images
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
  });

  // Initialize multer with the defined storage
  const upload = multer({ storage: storage });

  export default upload
