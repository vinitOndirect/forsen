require("dotenv").config();
const express = require("express");

const PORT = 8090;

const app = express();
app.use(express.json());

// new change will require a pr requst

// addign a new piece of code for creating a pr
app.use("/ping", (req, res) => res.send("pong"));

// adding a new comment to pr
// adding a new comment to pr

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
