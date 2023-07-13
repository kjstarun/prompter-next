import mongoose from "mongoose";

let isConnected = false;
const connectDB = async () => {
  if (isConnected) {
    // console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log("db connected");

    isConnected = true;
  } catch (error) {
    // console.log(error);
  }
};

export default connectDB;
