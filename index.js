const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample endpoints
app.get("/", (req, res) => {
  res.send("Hello, World! again!! bhai chalja");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Here is some data!" });
});

app.post("/api/data", (req, res) => {
  const receivedData = req.body;
  res.json({
    message: "Data received successfully!",
    data: receivedData,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
