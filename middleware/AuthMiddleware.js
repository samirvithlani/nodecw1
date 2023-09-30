const tokenUtil = require('../util/tokenUtil');

const validateUser =(req,res,next)=>{

    const token = req.headers.authorization;
    if(token){

        const user = tokenUtil.validateToken(token);
        if(user){
            req.user = user;
            next();
        }
        else{
            //unauthorized
            res.status(401).json({
                message:"unauthorized"
            })
        }

    }
    else{
        res.status(401).json({
            message:"token not found"
        })
    }


}
module.exports = {validateUser};