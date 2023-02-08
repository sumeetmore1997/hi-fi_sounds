const express=require("express")
const cors=require("cors")
const {connection}=require("./configs/db")
const {userRouter}=require("./routes/User.route")


const app=express()

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/users",userRouter)



app.listen(8282,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Trouble connecting to the DB")
        console.log(err)
    }
    console.log("running at 8282")
})



