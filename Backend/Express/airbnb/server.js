const express = require("express");
const path = require("path");
const userRouter = require("./routes/user.route");
const { router: hostRouter } = require("./routes/host.route");
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use("/host", hostRouter);
const rootDir = require("./utils/path.utils");
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "err404.html"));
});

const port = 3003;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
