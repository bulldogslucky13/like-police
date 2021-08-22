import express from "express";
import axios from "axios";
const app = express();
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.statusCode = 302;
  res.setHeader("Location", "https://cameronbristol.xyz");
  return res.end();
});

app.post("/new-message", async (req, res) => {
  try {
    const groupMeResult = await axios.get(
      `https://api.groupme.com/v3/groups?token=${process.env.GROUPME_ACCESS_TOKEN}`
    );
    res.json(groupMeResult.data.response);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log("Error!");
  }
  res.statusCode = 200;
  return res.end();
});

// tslint:disable-next-line:no-console
app.listen(process.env.PORT || 8080, () => console.log("Run that server!"));
