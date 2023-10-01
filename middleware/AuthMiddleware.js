const tokenUtil = require('../util/tokenUtil');
var count =0;
const validateUser =(req,res,next)=>{

    const token = req.headers.authorization;
    
    if(token){

        const user = tokenUtil.validateToken(token);
        console.log("iser object in validation tokemm",user);
        if(user){
            req.user = user;
            count++;
            console.log("object......",user,"-->",count,"call...");
            //object...... raj --> +1 call...
            //object...... raj --> +1 call...

            //sujal --> +1 call...
            //sujal --> +1 call...
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