import schedule from "node-schedule";
import axios from "axios";
import { arrayOfUserIdsToCheck } from "../utils/users-to-check";

class Jobs {
  private checkWhoHasntLiked = async (groupId: string, messageId: string) => {
    try {
      const axiosResponse = await axios.get(
        `https://api.groupme.com/v3/groups/${groupId}/messages/${messageId}?token=${process.env.GROUPME_SECRET}`
      );
      const favoritedIds: string[] =
        axiosResponse.data.response.message.favorited_by;
      return arrayOfUserIdsToCheck.reduce((acc, currentId) => {
        if (!favoritedIds.includes(currentId)) acc.push(currentId);
        return acc;
      }, []);
    } catch (error) {
      console.log(error.message);
    }
  };

  remindMessage = (
    newDateObj: Date,
    senderId: string,
    groupId: string,
    messageId: string
  ) => {
    schedule.scheduleJob(
      `Message tracker for ${senderId}`,
      newDateObj,
      async () => {
        const response = await this.checkWhoHasntLiked(groupId, messageId);
        console.log(`Missing IDs: `);
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
