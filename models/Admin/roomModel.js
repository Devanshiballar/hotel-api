const { Schema, model } = require("mongoose");

const roomSchema = new Schema(
  {
    Room_number: {
      type: Number,
      required: true,
      trim: true,
    },
    Room_type: {
      type: String,
      required: true,
      trim: true,
    },
    Room_price: {
      type: Number,
      required: true,
      trim: true,
    },
    Room_img:[],
  },
  { timestamps: true }
);

const room = model("room", roomSchema);
module.exports = room;
