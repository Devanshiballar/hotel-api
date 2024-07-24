const hotelModel = require("../../models/Admin/hotelModel");

exports.create = async (req, res) => {
  try {
    const {room_id, Hotel_Name, Hotel_City, Hotel_Addres, Hotel_Facilities } = req.body;
    const image = [];
   
    const Hotel_Image = image;
    if (req.files) {
      req?.files?.forEach((img) => {
        image.push(img.filename);
      });
    }
    console.log(req.files);
    console.log(image)

    const hotel = await hotelModel.create({
      room_id,
      Hotel_Name,
      Hotel_City,
      Hotel_Addres,
      Hotel_Facilities,
      Hotel_Image,
    });
    if (hotel) {
      res.json({
        success: true,
        message: "Hotel created successfully",
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
    const hotel = await hotelModel.find().populate('room_id').exec()
    if (hotel) {
      res.json({ hotel });
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
    const data = await hotelModel.findByIdAndDelete({ _id: id });
    if (data) {
      res.json({ success: true, message: "hotel data deleted 👍" });
    } else {
      res.json({ success: false, message: "data is not found" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { Hotel_Name, Hotel_City, Hotel_Addres, Hotel_Facilities } = req.body;
    const image = [];
   
    const Hotel_Image = image;
    if (req.files) {
      req.files.forEach((img) => {
        image.push(img.filename);
      });
    }
    console.log(req.files);
  
    const dataupdate = await hotelModel.findByIdAndUpdate(
      { _id: id },
      {
        Hotel_Name,
      Hotel_City,
      Hotel_Addres,
      Hotel_Facilities,
      Hotel_Image,
      }
    );
    if (dataupdate) {
      res.json({ success: true, message: "data has been updated" });
    } else {
      res.json({ success: false, message: "sorry id not found" });
    }
  } catch (err) {
    console.log(err);
  }
};
