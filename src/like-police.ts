import axios from "axios";
import dotenv from "dotenv";
import moment from "moment";
import { sendingJobs } from "./jobs/jobs";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

class LikePolice {
  private approvedSenders = process.env.APPROVED_SENDERS.split(",");

  private confusedResponses = [
    "Come again, sir?",
    "I'm sorry?",
    "Sorry, I don't know that command.",
  ];

  private peasantResponse = [
    "Not sure who you think you are but leave me alone.",
    "Leave me alone, peasant.",
    "Someone come get this guy. I'm not sure who he thinks he is...",
    "Lol. Good one. Who is that?",
    "Fuck off",
  ];

  private scheduleReminder = (
    senderId: string,
    remindIn: number,
    groupId: string,
    messageId: string
  ) => {
    const currentDate = new Date();
    const newDateObj = moment(currentDate).add(remindIn, "m").toDate();
    sendingJobs.remindMessage(newDateObj, senderId, groupId, messageId);
  };

  private determineRemindTime = (splitOnTime: string[]) => {
    return splitOnTime.length === 1
      ? Number(process.env.DEFAULT_REMIND)
      : Number(splitOnTime[1] > "60" ? "60" : splitOnTime[1]);
  };

  isApprovedSender = async (senderId: string) => {
    try {
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
          text: this.peasantResponse[
            Math.round(Math.random() * (this.peasantResponse.length - 1))
          ],
        });
        return false;
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
    return true;
  };

  determineCommand = (
    command: string,
    senderId: string,
    groupId: string,
    messageId: string
  ) => {
    console.log(command);
    if (command.match(/(cancel|stop)/gim)) {
      sendingJobs.cancelAllReminds();
      return `All future reminders are cancelled`;
    }
    if (command.match(/(remind|stalk|stake out|get on it|\^)/gim)) {
      const splitOnTime = command.split(/(\d+)/gm);
      const timeToRemind = this.determineRemindTime(splitOnTime);
      this.scheduleReminder(senderId, timeToRemind, groupId, messageId);
      return `I'll remind you in ${timeToRemind} minute${
        timeToRemind > 1 ? "s" : ""
      }, sir`;
    }
    if (
      command.match(
        /(hello|hi|greetings|hey|what\'?s up|waddup|what\'?s good)/gim
      )
    ) {
      return "Hello, sir.";
    }
    console.log("here");
    return this.confusedResponses[
      Math.round(Math.random() * (this.confusedResponses.length - 1))
    ];
  };
}

export const likePolice = new LikePolice();
