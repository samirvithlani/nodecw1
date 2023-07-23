const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

})
// mongoose.model("users",userSchema)
// module.exports = userSchema;

module.exports = mongoose.model("users",userSchema);