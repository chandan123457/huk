const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const app = express();

app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user",userRouter);

app.get("/",function(req,res){
    res.json({
        msg:"site is working"
    })
});
async function take() {
    await mongoose.connect("mongodb://localhost:27017/goat/newone")
    app.listen(3000,function(){
        console.log("conneted to db");
    })
}
take();