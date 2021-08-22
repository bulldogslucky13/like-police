const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("<h1>Hello from your Express.JS Server!</h1>");
});

app.listen(process.env.PORT || 3000, () => console.log("Run that server!"));
