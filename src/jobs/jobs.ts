import schedule from "node-schedule";
import axios from "axios";

class Jobs {
  remindMessage = (newDateObj: Date, senderId: string) => {
    schedule.scheduleJob(`Message tracker for ${senderId}`, newDateObj, () => {
      axios.post(`https://api.groupme.com/v3/bots/post`, {
        bot_id: process.env.BOT_ID,
        text: "That should be enough time, sir.",
      });
      // tslint:disable-next-line:no-console
      console.log(`Time to schedule something for ${senderId}`);
    });
  };
}

export const sendingJobs = new Jobs();
