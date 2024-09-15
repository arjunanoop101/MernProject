import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://arjunanoop101:7Z20cziUweOWwDtC@cluster0.diuph.mongodb.net/healthify")
    .then(()=>{
        console.log("Database connected")
    })
}