const mongoose = require("mongoose")

const ObjectId = mongoose.Schema.Types.ObjectId

const marksSchema = new mongoose.Schema({

 StudentName : {
    type : String,
    required : true
 },

 subject : {
    type : String,
    enum : ["Maths" , "english" , "Hindi" , "Science"]
 },

 userId: { type: ObjectId, required: true, ref: "User" },
 
 marks: {
    type : Number,
    required : true

 },

 isDeleted : {
 type : Boolean,
default : false

 }

},{timestamps : true})

module.exports = mongoose.model('student' , marksSchema)