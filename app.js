const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userSchema = require("./model/UserModel");
const PORT = 3001;

app.use(express.json());
app.use(cors()); //allow all origins


const userRoutes = require("./routes/UserRoutes");
const categoryRoutes = require("./routes/CategoryRoutes");
const productRoutes = require("./routes/ProductRoutes");
const fileUploadRoutes = require("./routes/FileUploadRoutes");
const bookRoutes = require("./routes/BookRoutes");
app.use('/user',userRoutes);
app.use('/category',categoryRoutes);
app.use('/product',productRoutes);
app.use('/file',fileUploadRoutes);
app.use('/book',bookRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/cw1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("error..",err);
})

app.listen(PORT, () => {
  console.log("server started on port",PORT);
});
