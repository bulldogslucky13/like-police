import schedule from "node-schedule";
import axios from "axios";

class Jobs {
  private checkWhoHasntLiked = async (messageId: string) => {
    try {
      const axiosResponse = await axios.get(
        `https://api.groupme.com/v3/groups/70651082/messages/${messageId}?token=${process.env.GROUPME_SECRET}`
      );
      return axiosResponse.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  remindMessage = (newDateObj: Date, senderId: string, messageId: string) => {
    schedule.scheduleJob(
      `Message tracker for ${senderId}`,
      newDateObj,
      async () => {
        const response = await this.checkWhoHasntLiked(messageId);
        console.log(response);
        axios.post(`https://api.groupme.com/v3/bots/post`, {
          bot_id: process.env.BOT_ID,
          text: "That should be enough time, sir.",
        });
        console.log(`Ran a remind message for ${senderId}`);
      }
    );
  };

  cancelAllReminds = () => {
    for (const job in schedule.scheduledJobs) schedule.cancelJob(job);
    console.log("Successfully cancelled all jobs!");
  };
}

export const sendingJobs = new Jobs();
