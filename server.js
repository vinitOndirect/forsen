require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

// addign a new piece of code for creating a pr
app.use("/ping", (req, res) => res.send("pong"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
