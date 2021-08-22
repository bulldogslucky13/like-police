import axios from "axios";
import dotenv from "dotenv";
import moment from "moment";
import schedule from "node-schedule";
import { sendingJobs } from "./jobs/jobs";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

class LikePolice {
  private approvedSenders = process.env.APPROVED_SENDERS.split(",");

  private scheduleReminder = (senderId: string, remindIn: number) => {
    const currentDate = new Date();
    const newDateObj = moment(currentDate).add(remindIn, "m").toDate();
    sendingJobs.remindMessage(newDateObj, senderId);
  };

  private determineRemindTime = (splitOnTime: string[]) => {
    return splitOnTime.length === 1
      ? Number(process.env.DEFAULT_REMIND)
      : Number(splitOnTime[1] > "60" ? "60" : splitOnTime[1]);
  };

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

  determineCommand = (command: string, senderId: string) => {
    if (command.match(/(remind|stalk|stake out|get on it)/gim)) {
      const splitOnTime = command.split(/(\d+)/gm);
      const timeToRemind = this.determineRemindTime(splitOnTime);
      this.scheduleReminder(senderId, timeToRemind);
      return `I'll remind you in ${timeToRemind} minutes, sir`;
    }
    return "Come again, sir?";
  };
}

export const likePolice = new LikePolice();
