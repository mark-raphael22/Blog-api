require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5060
// const userRouter =require("./route/userRoute")
const notFound=require("./middleware/notFoundroute")
const authRouter = require("./routes/authRouter")
const journalRouter = require("./routes/journalRouter")
const auth =require('./middleware/Authentication')

mongoose.set("strictQuery",true);

//middleware
app.use (express.json());


// routes
//public route
app.use("/api/v1",authRouter)
//private route
app.use("/api/v1/journal",journalRouter);


//error route
app.use(notFound)

const startserver =async()=>{
    try {
        await mongoose.connect(process.env.MON_URI)
        app.listen(port,()=>{
            console.log(`server running on port ${port}`);
        }) 
    } catch (error) {
        
    }

}
startserver();
