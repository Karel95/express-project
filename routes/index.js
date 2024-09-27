const express = require("express");
// const { Router } = require("express");
//const router = Router()

const router = express.Router()

router.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

module.exports = router;
