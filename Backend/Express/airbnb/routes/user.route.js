const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path.utils");
const { registerHome } = require("./host.route");

router.get("/", (req, res) => {
  console.log({ registerHome });
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = router;
