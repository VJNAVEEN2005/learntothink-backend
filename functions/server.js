const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

const baseDir = path.join(__dirname, "topics");


const getTopics = () => {
  return fs.readdirSync(baseDir).reduce((acc, category) => {
    const categoryPath = path.join(baseDir, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const topics = fs.readdirSync(categoryPath).map(file => ({
        category,
        topic: file.replace(".md", ""),
        content: fs.readFileSync(path.join(categoryPath, file), "utf-8")
      }));

      console.log(category)
      acc[category] = topics;
    }
    return acc;
  }, {});
};

app.get("/api/topics", (req, res) => {
  const topics = getTopics();
  res.json(topics);
});

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

module.exports.handler = serverless(app);
