require("dotenv").config();
const express = require("express");

const PORT = 8090;

const app = express();
app.use(express.json());

// addign a new piece of code for creating a pr
app.use("/ping", (req, res) => res.send("pong"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
