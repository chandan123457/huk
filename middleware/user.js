const {UserModel}= require("../db");

async function usermiddleware(req,res,next) {
    const username = req.headers.username;
    const password = req.headers.password;
    const User = await UserModel.findOne({
        username:username,
        password:password
    })
    if(User) {
        next()
    }else {
        res.json({
            message:"Invalid username or password"
        })

    }
}
module.exports=usermiddleware;