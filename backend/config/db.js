import mongoose from "mongoose";
import dns from "dns"
dns.setServers(["1.1.1.1","8.8.8.8"]);
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "vingo",
    });
    console.log("✅ db connected");
  } catch (error) {
    console.log("❌ db error:", error.message);
  }
};

export default connectDb;