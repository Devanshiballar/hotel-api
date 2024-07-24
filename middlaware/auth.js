const jwt = require("jsonwebtoken");
exports.varifyUser = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({
      error: "Access denied/unauthorized access",
    });
  }
  try {
    token = token.split(" ")[1];
    if (token === "nul" || !token) {
      return res.status(401).send({
        error: "unauthorized request",
      });
    }
    let verifiedUser = jwt.verify(token, "devanshi16");
    if (!verifiedUser)
      return res.status(401).json({
        error: "unauthorized request",
      });
    req.user = verifiedUser;
    next();
  } catch (err) {
    console.log(err);
  }
};

// exports.IsUser = async (req, res, next) => {
//   const { userRole } = req.user;
//   if (userRole === 0) {
//     console.log("user exists");
//     next();
//   } else {
//     return res.status(401).send("Unauthorized!");
//   }
// };

exports.IsAdmin = (req, res, next) => {
  try {
    if (req.user.userrole == 1) {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
