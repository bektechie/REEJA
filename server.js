const http = require("http");
const { MongoClient } = require("mongodb");

// MongoDB Atlas connection string
const uri = "mongodb+srv://Abdulaziz2903:Abdulaziz2903@cluster0.dah6f2g.mongodb.net/REEJA";

// Create MongoClient (modern driver v6)
const client = new MongoClient(uri);

async function startServer() {
  try {
    await client.connect(); // Connect to MongoDB
    console.log("✅ MongoDB connected successfully");

    const db = client.db("REEJA"); // Get database reference

    // Pass DB to app
    const app = require("./app")(db);

    const PORT = 3000;
    http.createServer(app).listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}

startServer();
