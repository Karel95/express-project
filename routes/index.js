const express = require("express");
// const { Router } = require("express");
//const router = Router()

const router = express.Router()

router.get("/dashboard", (req, res) => {
  const title = 'Dashboard'
  res.render('index', {title})
});

module.exports = router;
