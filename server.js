const http = require("http");
const { MongoClient } = require("mongodb");

// MongoDB Atlas connection string
const connectionString =
  "mongodb+srv://Abdulaziz2903:Abdulaziz2903@cluster0.dah6f2g.mongodb.net/REEJA";

const client = new MongoClient(connectionString);

async function startServer() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("✅ MongoDB connected successfully");

    const db = client.db("REEJA");

    // Pass db to app.js
    const app = require("./app")(db);

    // Start server
    const server = http.createServer(app);
    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}

startServer();
