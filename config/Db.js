// connect MongoDB with mongoose
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
