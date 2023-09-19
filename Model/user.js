const { Schema, model} = require("mongoose");

const userSchema = new Schema({
   firstName:{
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    techSchoolAttended: {
        type: String,
        required: true
    },
    skillSet:{
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    
    },
    internshipPackage: {
        type: String,
        required: true,
        enum: ['Product Management', 'Frontend Development', 'Backend Development', 'UI/UX Design'],
        
    },
    reasonToGetOnboarded: {
        type: String,
        required: true
    }
});

module.exports = model('User', userSchema)