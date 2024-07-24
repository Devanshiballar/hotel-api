const { Schema, model, default: mongoose } = require("mongoose");

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
    payment_type: {
      type: String,
      required: true,
      trim: true,
    },
    checkIN_Date: {
      type: String,
      required: true,
      trim: true,
    },
    checkOut_Date: {
      type: String,
      required: true,
      trim: true,
    },
    
    person: {
      type: String,
      required: true,
      trim: true,
    },
    room_id:{
        type:mongoose.Types.ObjectId,
        ref:"room",
      },
    hotel_id:{
        type:mongoose.Types.ObjectId,
        ref:"hotel",
      },
    

  },
  { timestamps: true }
);

const Booking = model("Booking", UserSchema);
module.exports = Booking;
