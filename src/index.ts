import express from "express";
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.statusCode = 302;
  res.setHeader("Location", "https://cameronbristol.xyz");
  return res.end();
});

app.post("/new-message", (req, res) => {
  // tslint:disable-next-line:no-console
  console.log("Received a new message!");
  res.statusCode = 200;
  return res.end();
});

// tslint:disable-next-line:no-console
app.listen(process.env.PORT || 8080, () => console.log("Run that server!"));
