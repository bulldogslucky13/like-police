import axios from "axios";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

class LikePolice {
  private approvedSenders = process.env.APPROVED_SENDERS.split(",");

  isApprovedSender = async (senderId: string) => {
    if (this.approvedSenders.length < 1) {
      await axios.post(`https://api.groupme.com/v3/bots/post`, {
        bot_id: process.env.BOT_ID,
        text: "LikePolice is not configured!",
      });
      return false;
    }
    if (!this.approvedSenders.includes(senderId)) {
      await axios.post(`https://api.groupme.com/v3/bots/post`, {
        bot_id: process.env.BOT_ID,
        text: "Leave me alone, peasant.",
      });
      return false;
    }
    return true;
  };

  determineCommand = (command: string) => {
    if (command.match(/(remind|stalk|stake out|get on it)/gim)) {
      const splitOnTime = command.split(/(\d+)/gm);
      // TODO: add command to be run
      return `I'll remind you in ${
        splitOnTime.length === 1 ? process.env.DEFAULT_REMIND : splitOnTime[1]
      } minutes, sir`;
    }
    return "Come again, sir?";
  };
}

export const likePolice = new LikePolice();
