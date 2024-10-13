const {AdminModel}= require("../db");

async function adminmiddleware(req,res,next) {
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = await AdminModel.findOne({
        username:username,
        password:password
    })
    if(admin) {
        next()
    }else {
        res.json({
            message:"Invalid username or password"
        })

    }
}
module.exports= adminmiddleware;