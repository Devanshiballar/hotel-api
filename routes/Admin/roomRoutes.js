const express = require('express');
const router = express.Router();
const roomController = require('../../controllers/Admin/roomController');
const upload = require('../../utils/fileupload')


router.post('/', upload.array('Room_img',5),roomController.create)
router.get("/",roomController.index)
router.delete("/:id",roomController.trash)


module.exports = router;






