import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname: {
        type: String, 
        required: true, 
        trim: true, // remove extra spaces
        min: 5,
        max: 20
    }, 
    lastname: {
        type: String, 
        required: true, 
        trim: true, // remove extra spaces
        min: 5,
        max: 20
    }, 
    username: {
        type: String, 
        required: true, 
        trim: true, // remove extra spaces
        unique:true, 
        lowercase: true
    }, 
    email: {
        type: String, 
        required: true, 
        trim: true, // remove extra spaces
        unique: true,
        lowercase:true
    }, 
    password: {
        type:String, 
        required: true
    },
    phone: {
        type: String, 
        required: true
    }


})

const User = mongoose.model('user', userSchema);

export default User;