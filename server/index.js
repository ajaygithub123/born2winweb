const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",         // your MySQL username
  password: "root", // your MySQL password
  database: "blogdb",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// GET all posts
app.get("/api/posts", (req, res) => {
  db.query("SELECT * FROM posts ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// POST a new post
app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;
  const query = "INSERT INTO posts (title, content) VALUES (?, ?)";
  db.query(query, [title, content], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ status: "Post added", id: result.insertId });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



/*const express = require("express"); //using MYSQL
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "it_company",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

// Contact API
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) throw err;
    res.send({ status: "Success", id: result.insertId });
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));*/

/* using mongo db const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory "database"
let posts = [];

// Routes
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;
  posts.push({ title, content });
  res.json({ status: "Post added" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); */
