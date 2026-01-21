import mongoose from 'mongoose';
export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB)
        console.log("DB connected successfully");

    }catch(err){
        console.log("DB connection error",err);
        process.exit(1);
    }
}