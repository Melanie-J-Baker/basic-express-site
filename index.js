import { fileURLToPath } from "url";
import { dirname } from "path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const express = require("express");
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static("public"));

// Home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

// About
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

// Contact
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

// 404
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

// start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
