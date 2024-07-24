const { default: mongoose } = require("mongoose");

const db = mongoose
  .connect("mongodb://localhost:27017/Hotel_API")
  .then(() => {
    console.log("database connected 👍");
  })
  .catch(() => {
    console.log("database not connected");
  });

module.exports = db;
