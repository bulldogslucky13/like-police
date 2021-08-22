class LikePolice {
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
