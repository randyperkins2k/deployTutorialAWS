
const express = require('express');

const app = express();

// Home page.
app.get('/', (req, res) => {
  res.send("Welcome to Rand's tight home page.");
})

app.listen(3000, () => {
  console.log("RLP says hello to you! Holler at http://127.0.0.1:3000/");
})
