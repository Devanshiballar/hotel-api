const router=require("express").Router()
const userBookingController=require("../../controllers/User/userBookingController")

router.post("/",userBookingController.create)
router.get("/",userBookingController.index)



module.exports=router;