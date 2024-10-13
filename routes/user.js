
const express = require("express");
const userRouter = express.Router();
const {usermiddleware}=require("../middleware/user");
userRouter.post("/signup",function(req,res){
    res.json({
        "message": "User created successfully",
    })
})
userRouter.get("/courses",usermiddleware,function(req,res) {
    res.json({
        "message": "User created successfully",
    })
// all course show here
})
userRouter.post("/courses/:courseId",function(req,res){
    //Purchases a course. courseId in the URL path 
    //should be replaced with the ID of the course to be purchased.
    res.json({
        "message": "User created successfully",
    })
})
userRouter.get("/purchasedCourses",function(req,res){
    // Lists all the courses purchased by the user.
    res.json({
        "message": "User created successfully",
    })

})
module.exports=userRouter;
