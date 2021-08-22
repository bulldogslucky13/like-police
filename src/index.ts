import express from "express";
import axios from "axios";
const app = express();
import dotenv from "dotenv";
import { GroupMeResponseType } from "./types";
import { newMessageMid } from "./middleware/new-message-mid";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(express.static("public"), express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.statusCode = 302;
  res.setHeader("Location", "https://cameronbristol.xyz");
  return res.end();
});

const determineCommand = (command: string) => {
  if (command.match(/(remind|get on it)/gm)) {
    // tslint:disable-next-line:no-console
    const splitOnTime = command.split(/(\d+)/gm);
    return `I'll remind you in ${
      splitOnTime.length === 1 ? process.env.DEFAULT_REMIND : splitOnTime[1]
    } minutes, sir`;
  }
  return "Come again?";
};

app.post(
  "/new-message",
  newMessageMid,
  async (req: express.Request, res: express.Response) => {
    try {
      const body: GroupMeResponseType = req.body;
      if (body.sender_type === "user" && body.text.match(/(@LikePolice)/gm)) {
        const command = body.text.split("@LikePolice")[1];
        const commandResult = determineCommand(command);
        const messageResult = await axios.post(
          `https://api.groupme.com/v3/bots/post`,
          {
            bot_id: process.env.BOT_ID,
            text: commandResult,
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
