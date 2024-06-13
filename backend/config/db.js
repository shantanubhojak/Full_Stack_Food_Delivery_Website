import mongoose  from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shantanubhojak101:Robert2362@cluster0.c77orv2.mongodb.net/newFoodWebsite').then(()=>{
        console.log('Database connected');
    })
}
//Lvt1va54vB4FRKu5