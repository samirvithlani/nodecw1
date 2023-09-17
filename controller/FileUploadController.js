const multer = require("multer");
const path = require("path");
const googlecontroller = require("./GoogleController");

const storage = multer.diskStorage({
  //destination: "./uploads/",

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

const uploadFile = async (req, res) => {
  upload(req, res, async (err) => {
    console.log("req.file", req.file);
    if (err) {
      res.status(400).json({ message: err });
    } else {
      //google upload controll code....
      const response = await googlecontroller.uploadFile(req.file.path);

      if (res != undefined || res != null) {
        res.status(200).json({
          message: "File uploaded successfully",
          filename: req.file.originalname,
          fileid: response,
        });
      } else {
        res.status(400).json({ message: "File not uploaded" });
      }
    }
  });
};

const getAllFileFromGoogleDrive = async (req, res) => {
  const files = await googlecontroller.getAllFileFromGoogleDrive();
  if (files != undefined || files != null) {
    res.status(200).json({ message: "Files retrieved successfully", files });
  } else {
    res.status(400).json({ message: "Files not retrieved" });
  }
};

module.exports = { uploadFile, getAllFileFromGoogleDrive };
