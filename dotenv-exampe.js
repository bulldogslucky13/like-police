console.log(
  "No value for GROUPME_ACCESS_TOKEN yet:",
  process.env.GROUPME_ACCESS_TOKEN
);

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

console.log(
  "Now the value for GROUPME_ACCESS_TOKEN is:",
  process.env.GROUPME_ACCESS_TOKEN
);
