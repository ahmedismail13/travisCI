const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/index", (req, res) => {
  res.status(200).send({ message: "Travis CI" });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
