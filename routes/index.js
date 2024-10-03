const express = require("express");
// const { Router } = require("express");
//const router = Router()

const router = express.Router();
const axios = require("axios");

router.get("/dashboard", (req, res) => {
  const title = "Dashboard";
  res.render("index", { title });
});

router.get("/posts", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  res.render("posts", { posts: response.data });
});

module.exports = router;
