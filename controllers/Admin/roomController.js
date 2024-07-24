const roomModel = require("../../models/Admin/roomModel");

exports.create = async (req, res) => {
  try {
    const { Room_number, Room_type, Room_price } = req.body;
    const image = [];

    const Room_img = image;
    if (req.files) {
      req?.files?.forEach((img) => {
        image.push(img.filename);
      });
    }
    console.log(req.files);
    console.log(image)

    const room = await roomModel.create({
      Room_number,
      Room_type,
      Room_price,
      Room_img,
    });
    if (room) {
      res.json({
        success: true,
        message: "Room created successfully",
      });
    } else {
      res.json("data is not inserted");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.index = async (req, res) => {
  try {
    const room = await roomModel.find();
    if (room) {
      res.json({ room });
    } else {
      res.json({ message: "No hotel found" });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.trash = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await roomModel.findByIdAndDelete({ _id: id });
    if (data) {
      res.json({ success: true, message: "Room data deleted 👍" });
    } else {
      res.json({ success: false, message: "data is not found" });
    }
  } catch (err) {
    console.log(err);
  }
};
