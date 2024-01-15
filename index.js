const express = require("express");
const app = express();
const port = 3000; // You can change this to any port you prefer

// Middleware to serve static files from the public directory
app.use(express.static("public"));

// Home Page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

// About Page
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

// Contact Page
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

// 404 Page - This should be the last route to catch any undefined routes
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
