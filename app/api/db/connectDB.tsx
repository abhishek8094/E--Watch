import { error } from "console";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(conn.connection.host);
  } catch (err: any) {
    console.log("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};
