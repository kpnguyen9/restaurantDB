const express = require("express");
const app = express();
const port = 3000;

const Sequelize = require("sequelize");
const { Review, Reviewers, Restaurants } = require("./models");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to reviewsDB");
});

app.get("/reviews", async (req, res) => {
  const reviews = await Review.findAll();
  res.json(reviews);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
