import mongoose from "mongoose"


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://alsaurav2001:saurav9276@cluster0.9x2uxry.mongodb.net/food-delivery').then(()=>console.log("DB connected"))
}