const express = require("express");
const {AdminModel,CourseModel} = require("../db")
const adminRouter = express.Router();
const {adminmiddleware} = require("../middleware/admin");
adminRouter.post("/signup",async function(req,res) {
    const {username,password}= req.body
    
    await AdminModel.create({
        username:username,
        password:password
    })
    res.json({
        message:"Admin created successfully"
    })
})
adminRouter.post("/course",adminmiddleware,async function(req,res) {
    // const Admin= req.admin
    const {title,description,price,imageLink} = req.body
    const course = await CourseModel.create({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink
    })
    res.json({
        message:"Course created successfully",
        courseId:course._id
    })
})
adminRouter.get("/courses",adminmiddleware,function(req,res){

})
module.exports=adminRouter;
