const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
      trim: true,
    },
    user_email: {
      type: String,
      required: true,
      trim: true,
    },
    user_mobile: {
      type: Number,
      required: true,
      trim: true,
    },
    user_password: {
      type: String,
      required: true,
      trim: true,
    },
    cpassword: {
      type: String,
      required: true,
      trim: true,
    },
    role_id: {
      type: String,
      default: 0,
      enum: [0, 1, 2],
    },
  },
  { timestamps: true }
);

const User = model("UserData", UserSchema);
module.exports = User;
