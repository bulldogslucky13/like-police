import schedule from "node-schedule";
import axios from "axios";

class Jobs {
  remindMessage = (newDateObj: Date, senderId: string) => {
    schedule.scheduleJob(`Message tracker for ${senderId}`, newDateObj, () => {
      axios.post(`https://api.groupme.com/v3/bots/post`, {
        bot_id: process.env.BOT_ID,
        text: "That should be enough time, sir.",
      });
      console.log(`Ran a remind message for ${senderId}`);
    });
  };

  cancelAllReminds = () => {
    for (const job in schedule.scheduledJobs) schedule.cancelJob(job);
    console.log("Successfully cancelled all jobs!");
  };
}

export const sendingJobs = new Jobs();
