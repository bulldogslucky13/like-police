import express from "express";
import axios from "axios";
const app = express();
import dotenv from "dotenv";
import { GroupMeResponseType } from "./types";
import { newMessageMid } from "./middleware/new-message-mid";
import { likePolice } from "./like-police";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(express.static("public"), express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.statusCode = 302;
  res.setHeader("Location", "https://cameronbristol.xyz");
  return res.end();
});

app.post(
  "/new-message",
  newMessageMid,
  async (req: express.Request, res: express.Response) => {
    try {
      const body: GroupMeResponseType = req.body;
      if (
        body.sender_type === "user" &&
        body.text.match(/(@Like ?Police)/gim)
      ) {
        if (await likePolice.isApprovedSender(body.sender_id)) {
          const command = body.text.split(/(@Like ?Police)/gim);
          const commandResult = likePolice.determineCommand(
            command[command.length - 1],
            body.sender_id
          );
          const messageResult = await axios.post(
            `https://api.groupme.com/v3/bots/post`,
            {
              bot_id: process.env.BOT_ID,
              text: commandResult,
            }
          );
          res.statusCode = messageResult.status;
        }
      }
    } catch (error) {
      res.statusCode = 500;
      res.json({ message: error });
    }
    return res.end();
  }
);

app.listen(process.env.PORT || 8080, () => console.log("Run that server!"));
