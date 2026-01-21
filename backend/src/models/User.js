import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    hashPasseword:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    displayName:{
        type:String,
        required:true,
        trim:true,
    },
    avatarUrl:{
        type:String, //link CDN to display avatar
    },
    avatarId:{
        // type:String,  Cloundinary public_id to remove
    },
    bio:{
        type:String,
        maxLength:500
    },
    phone:{
        type:String,
        sparse:true // allow null, unique
    },
    timestamps:true,
});
const User=mongoose.model("User",userSchema);
export default User;