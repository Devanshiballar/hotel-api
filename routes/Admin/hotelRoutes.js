const express = require("express");
const router = express.Router();
const hotelController = require("../../controllers/Admin/hotelController");
const upload = require("../../utils/fileupload");
const { varifyUser} = require("../../middlaware/auth")

router.post("/",varifyUser, upload.array("Hotel_Image", 5), hotelController.create);
router.get("/", hotelController.index);
router.delete("/:id",hotelController.trash)
router.patch("/:id", upload.array("Hotel_Image", 5), hotelController.create);

module.exports = router;
