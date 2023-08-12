const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userSchema = require("./model/UserModel");
const PORT = 3000;

app.use(express.json());

const userRoutes = require("./routes/UserRoutes");
const categoryRoutes = require("./routes/CategoryRoutes");
const productRoutes = require("./routes/ProductRoutes");
app.use('/user',userRoutes);
app.use('/category',categoryRoutes);
app.use('/product',productRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/cw1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("error..",err);
})

app.listen(PORT, () => {
  console.log("server started on port 3000");
});
