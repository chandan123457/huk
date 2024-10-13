const mongoose=require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = mongoose.ObjectId;

const AdminSchema = new Schema({
	username:{type:String,unique:true},
	password:String
})
const UserSchema = new Schema({
	username:String,
	password:Number,
	purchasesCourse:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:'course'
	}]
});
const CourseSChema = new Schema({
	title:String,
	description:String,
	imageLink:String,
	price:Number,
	
})
const AdminModel = mongoose.model("admin",AdminSchema);
const UserModel = mongoose.model("User",UserSchema);
const CourseModel = mongoose.model("Course",CourseSChema);

module.exports={
	AdminModel,
	UserModel,
	CourseModel
}

