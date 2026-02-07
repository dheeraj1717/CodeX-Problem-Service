const express = require("express");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const BaseError = require("./errors/BaseError");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  res.json({ message: "Problem service is alive" });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  throw new BaseError("Server Error", 500, "Something went wrong", { error: "Server Error" });
});
