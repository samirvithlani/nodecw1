const bookModel = require("../model/BookModel");
const multer = require("multer");
const googleController = require("./GoogleController");

const storage = multer.diskStorage({
  //destination:''
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("bookImage");

const createBook = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      res.json({ message: err });
    } else {
      const id = await googleController.uploadFile(req.file.path);
      //   res.status(200).json({ message: id });
      const bookObj = {
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty,
        genere: req.body.genere,
        ratings: req.body.ratings,
        googleDriveId: id,
      };

      const storedBook = await bookModel.create(bookObj);
      if (storedBook) {
        res.status(200).json({
          message: "Book created successfully",
          data: storedBook,
        });
      } else {
        res.status(500).json({
          message: "Error in creating book",
        });
      }
    }
  });
};

const getAllBooks = async (req, res) => {
  const allBooks = await bookModel.find();
  if (allBooks) {
    res.status(200).json({
      message: "All books fetched successfully",
      data: allBooks,
    });
  } else {
    res.status(500).json({
      message: "Error in fetching books",
    });
  }
};

module.exports = { createBook, getAllBooks };
