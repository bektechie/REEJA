const http = require("http");
const { MongoClient } = require("mongodb");

// MongoDB Atlas connection string
const uri = "mongodb+srv://Abdulaziz2903:Abdulaziz2903@cluster0.dah6f2g.mongodb.net/REEJA?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { tls: true });

async function startServer() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db("REEJA"); // select your database

    const app = require("./app");
    const server = http.createServer(app);
    const PORT = 3000;

    server.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}

startServer();

