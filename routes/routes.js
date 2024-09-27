function Routes(app) {
  app.get("/profile", (req, res) => {
    res.send("Profile Page");
  });
}

module.exports = Routes
