const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost", // Replace with your MySQL host
  user: "root",      // Replace with your MySQL username
  password: "root",      // Replace with your MySQL password
  database: "portfolio", // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database.");
  }
});

// API endpoint to handle form submissions
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error saving contact information.");
    } else {
      res.status(200).send("Contact information saved successfully.");
    }
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});