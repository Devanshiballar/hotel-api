const router=require("express").Router()
const UserController=require("../../controllers/User/userController")

router.post("/",UserController.create)
router.post("/login",UserController.login)



module.exports=router;