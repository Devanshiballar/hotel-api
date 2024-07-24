const express = require('express');
const app = express();
const PORT = 5000;
require('./config/db')
// const path = require("path");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const hotelRoutes = require('./routes/Admin/hotelRoutes')
const roomRoutes = require('./routes/Admin/roomRoutes')
const userRoutes = require('./routes/User/userRoutes')
const userBookRoutes = require("./routes/User/userBookingRoutes")

app.use('/api/v1/hotel',hotelRoutes)
app.use('/api/v1/room',roomRoutes)


app.use('/api/v2/user',userRoutes)
app.use("/api/v2/book",userBookRoutes)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})