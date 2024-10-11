const express = require("express");
const app = express();
const PORT = 3000;

app.use("/employees", require("./api/employees"));

app.use(express.json);

app.use((req, use, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use((req, res, next) => {
  next({ status: 404, message: "Endpoint not found." });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500);
  res.json(err.message ?? "Sorry, something went wrong.");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
