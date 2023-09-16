// const authutil = (token)=>(req,res,next)=>{
var count = 0;
const authutil = (req, res, next) => {
  var token = req.headers.authorization;
  console.log(token);
  if (token) {
    if (token == "abcd") {
      count = count + 1;
      console.log(count);
      if (count < 5) {
        next();
      } else {
        res.status(429).json({ message: "Too many requests" });
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
    //next()
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = authutil;
