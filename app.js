const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userSchema = require("./model/UserModel");
const PORT = 3000;

app.use(express.json());

const userRoutes = require("./routes/UserRoutes");
app.use('/user',userRoutes);

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
