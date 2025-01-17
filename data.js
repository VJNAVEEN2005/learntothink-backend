const serverless = require('serverless-http')
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors()); // Allow frontend requests

const baseDir = path.join(__dirname, "topics");

// Function to scan topic directories dynamically
const getTopics = () => {
  return fs.readdirSync(baseDir).reduce((acc, category) => {
    const categoryPath = path.join(baseDir, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const topics = fs.readdirSync(categoryPath).map(file => ({
        category,
        topic: file.replace(".md", ""),
        content: fs.readFileSync(path.join(categoryPath, file), "utf-8")
      }));
      acc[category] = topics;
    }
    return acc;
  }, {});
};


// API Endpoint to get all topics
app.get("/api/topics", (req, res) => {
  const topics = getTopics();
  res.json(topics);
});

// API to get a specific topic
app.get("/api/topic/:category/:topic", (req, res) => {
  const { category, topic } = req.params;
  const topicPath = path.join(baseDir, category, `${topic}.md`);
  
  if (fs.existsSync(topicPath)) {
    const content = fs.readFileSync(topicPath, "utf-8");
    res.json({ category, topic, content });
    
  } else {
    res.status(404).json({ error: "Topic not found" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports.handler = serverless(app)