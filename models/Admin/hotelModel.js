const { Schema, model, default: mongoose } = require("mongoose");
const SchemaFormat = {
  type: String,
  require: true,
  trim: true,
};
const adminSchema = new Schema({
  room_id: {
    type: mongoose.Types.ObjectId,
    ref: "room",
  },
  Hotel_Name: {
    ...SchemaFormat,
  },
  Hotel_City: {
    ...SchemaFormat,
  },
  Hotel_Addres: {
    ...SchemaFormat,
  },
  Hotel_Image: [],
  Hotel_Facilities: {
    ...SchemaFormat,
  },
  Role_id: {
    type: "String",
    default: 1,
    enum: [0, 1, 2],
  },
});

const admin = model("hotel", adminSchema);
module.exports = admin;
