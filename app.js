const express = require("express");

module.exports = function (db) {
  const app = express();
  const usersCollection = db.collection("users");

  // Middleware
  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Views
  app.set("views", "views");
  app.set("view engine", "ejs");

  // Routes

  // Create user
  app.post("/create-item", async (req, res) => {
    try {
      const result = await usersCollection.insertOne(req.body);
      res.json({ success: true, id: result.insertedId });
    } catch (err) {
      console.error("Insert error:", err);
      res.status(500).json({ success: false, error: err });
    }
  });

  // Author page
  app.get("/author", async (req, res) => {
    const user = await usersCollection.findOne({}) || { name: "No user", email: "No email" };
    res.render("author", { user });
  });

  // Home page
  app.get("/", (req, res) => {
    res.render("reja");
  });

  return app;
};
