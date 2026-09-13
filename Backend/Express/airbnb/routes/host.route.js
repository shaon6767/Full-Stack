const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path.utils");

router.get("/add-home", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "register.html"));
});

const registerHome = [];

router.post("/add-home", (req, res) => {
  const { name } = req.body;
  console.log("Received data:", name);
  registerHome.push(name);
  res.sendFile(path.join(rootDir, "views", "addedHome.html"));
});

exports.router = router;
exports.registerHome = registerHome;
