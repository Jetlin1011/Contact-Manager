const mongoose=require('mongoose')
 mongoose.connect("mongodb://localhost:27017/ContactManagerServer",{useNewUrlParser:true})

 const Contact=mongoose.model("Contact",{
    name:String,
    company:String,
    email:String,
    title:String,
    mobile:Number,
    photo:String
 })

 module.exports={
Contact
 }