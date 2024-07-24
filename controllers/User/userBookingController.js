const Booking = require("../../models/User/userBookingModel");
const { populate } = require("../../models/User/userModel");

exports.create = async (req, res) => {
    try {
      const { room_id,hotel_id,user_name, user_email, user_mobile,payment_type,checkIN_Date,checkOut_Date,person} =
        req.body;
      const userBooking = await Booking.create({
        user_name,
        user_email,
        user_mobile,
        payment_type,
        checkIN_Date,
        checkOut_Date,
        person,
        room_id,
        hotel_id
        
      });
      if (userBooking) {
        res.json({
          success: true,
          message: "Booking successfully",
        });
      } else {
        res.json("booking failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  exports.index = async (req, res) => {
    try {
      const userBooking = await Booking.find().populate('room_id').populate('hotel_id').exec();
      if (userBooking) {
        res.json({ userBooking });
      } else {
        res.json({ message: "Booking is not find" });
      }
    } catch (err) {
      console.log(err);
    }
  };