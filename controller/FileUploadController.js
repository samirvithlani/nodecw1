const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads/",

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: function (req, file, cb) {
    console.log("file", cb);
    checkFileType(file, cb);
  },
}).single("file");

const checkFileType = (file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);
  if (extName && mimeType) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
};

const uploadFile = (req, res) => {
  upload(req, res, (err) => {
    console.log("req.file", req.file);
    if (err) {
      res.status(400).json({ message: err });
    } else {
      res.status(200).json({
        message: "File uploaded successfully",
        filename: req.file.originalname,
      });
    }
  });
};

module.exports = { uploadFile };
