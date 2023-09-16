const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: './uploads/',

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  // fileFilter: function(req, file, cb){
  //     checkFileType(file, cb);
  // }
}).single("file");

const uploadFile = (req, res) => {
    
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(200).json({
        message: "File uploaded successfully",
        filename: req.file.originalname,
      });
    }
  });
};

module.exports = { uploadFile };
