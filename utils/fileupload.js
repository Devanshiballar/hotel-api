const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "Hotel_Image") {
      cb(null, "./uploads/Hotel_Image");
    }
    if (file.fieldname === "Room_img") {
      cb(null, "./uploads/Room_Image");
    }
  },
  filename: (req, file, cb) => {
    if (file.fieldname === "Hotel_Image" || file.fieldname === "Room_img") {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});
function checkFileType(file, cb) {
  if (file.fieldname === "Hotel_Image" || file.fieldname === "Room_img") {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/svg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
}

module.exports = upload;

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random());
//     //   cb(null, file.filename + '-' + uniqueSuffix)
//     cb(null, `${uniqueSuffix}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });
// module.exports = upload;
