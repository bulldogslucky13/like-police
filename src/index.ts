import express from "express";
import axios from "axios";
const app = express();
import dotenv from "dotenv";
import { GroupMeResponseType } from "./types";
import { GroupMeNewTextSchema } from "./schemas/schemas";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(express.static("public"), express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.statusCode = 302;
  res.setHeader("Location", "https://cameronbristol.xyz");
  return res.end();
});

const newMessageMid = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await GroupMeNewTextSchema.validateAsync(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  next();
};

app.post(
  "/new-message",
  newMessageMid,
  async (req: express.Request, res: express.Response) => {
    try {
      const body: GroupMeResponseType = req.body;
      if (
        body.sender_type === "user" &&
        body.text.match(/(@LikePolice remind)/gm)
      ) {
        const messageResult = await axios.post(
          `https://api.groupme.com/v3/bots/post`,
          {
            bot_id: process.env.BOT_ID,
            text: `On it, sir.`,
          }
        );
        res.statusCode = messageResult.status;
      }
    } catch (error) {
      res.statusCode = 500;
      res.json({ message: error });
    }
    return res.end();
  }
);

// tslint:disable-next-line:no-console
app.listen(process.env.PORT || 8080, () => console.log("Run that server!"));
