const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/add-home", (req, res) => {
  res.render("register");
});

const registerHome = [];

router.post("/add-home", (req, res) => {
  const { name } = req.body;
  console.log("Received data:", name);
  registerHome.push(name);
  res.redirect("/thanks");
});

exports.router = router;
exports.registerHome = registerHome;
