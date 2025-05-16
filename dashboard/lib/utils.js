import mongoose from 'mongoose';

let connection = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect("mongodb+srv://hak:123@cluster0.1kmxlem.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0", {
      ssl: true,  // SSL connection is required for MongoDB Atlas
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw new Error(error);
  }
};
