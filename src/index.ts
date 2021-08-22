import express from "express";
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  // tslint:disable-next-line:no-console
  res.send("<h1>Hello from your Express.JS Server!</h1>");
});

// tslint:disable-next-line:no-console
app.listen(process.env.PORT || 8080, () => console.log("Run that server!"));
