const express = require("express");
const router = express.Router();
const { registerHome } = require("./host.route");

router.get("/", (req, res) => {
  res.render("home", { registerHome });
});

router.get("/thanks", (req, res) => {
  res.render("addedHome", { registerHome });
});

router.get("/homes", (req, res) => {
  res.render("homes", { registerHome });
});

module.exports = router;
