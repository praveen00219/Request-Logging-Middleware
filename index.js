const express = require("express");
const requestLogger = require("./middleware/requestLogger");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

// Global middleware for request logging
app.use(requestLogger);

// Use Morgan for advanced logging
app.use(morgan(":method :url :status :response-time ms - IP: :remote-addr"));

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
