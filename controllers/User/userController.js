const hashpassword = require("../../helper/HashPass");
const comparepassword = require("../../helper/comparepass");
const User = require("../../models/User/userModel");
const jwt = require("jsonwebtoken");

exports.create = async (req, res) => {
  try {
    const { user_name, user_email, user_mobile, user_password, cpassword } =
      req.body;
    if (user_password != cpassword) {
      res.json("Password Not match....");
    }
    const hashedPassword = await hashpassword(user_password, cpassword);
    const Isvalid = await User.findOne({ user_email: user_email });
    if (Isvalid) {
      res.json("Email Address Already Exist");
    }

    const Isregister = await User.create({
      user_name,
      user_email,
      user_mobile,
      user_password: hashedPassword,
      cpassword: hashedPassword,
    });
    if (!Isregister) {
      res.status(400).json({
        success: false,
        message: "Something went wrong",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Registration Successfully...",
      });
    }
  } catch (error) {
    console.log(error);
  }
};


  exports.login =async(req,res)=>{
    try {
        const {user_email,user_password}=req.body;
    
    
        const IsEmail=await User.findOne({user_email:user_email})
        if(!IsEmail){
            res.status(400).json({
                success:false,
                message:"Invalid Details...😫😫😫😫"
            })
        }
        //comaparing a password
    
        const Ismatch=await comparepassword(user_password,IsEmail.user_password)
        if(!Ismatch){
            res.status(400).json({
                success:false,
                message:"Invalid Crediantial...🤦‍♂️🤦‍♂️🤦‍♀️🤦‍♀️😫"
            })
        }
    
        const token = jwt.sign(
            {
                userId: IsEmail._id,
                userRole: IsEmail.role_id,
            },
            "devanshi16",
            { expiresIn: "24h" }
          );
          res.header("token", token).json({
            success: true,
            message: "login successful!",
          });
          console.log(token);
        } catch (err) {
          console.log(err);
          res
            .status(500)
            .json({ error: "An error occurred during login", details: err.message });
        }
}