import mongoose from "mongoose";
import env from "dotenv";
env.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err.message);
  }
};
