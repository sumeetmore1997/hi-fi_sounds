const express=require("express")
const {UserModel}=require("../models/User.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{

    const { email, password ,name, mobile} = req.body;
    const check = await UserModel.findOne({ email });
    if (check) {
      res.send({"msg":"Already had registerd plz login"});
    } else {
      try {
        bcrypt.hash(password, 6, async function (err, hash) {
          const user = new UserModel({ email, password: hash, name, mobile });
         
          await user.save();
          res.send({msg:"Sign Up Successfull"});
        });
      } catch (e) {
        console.log(e);
        res.send({"msg": "Something went wrong contact admin" });
      }
    }
 //return  res.send("Registerd")
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.find({email})
        const hashed_pass=user[0].password
        if(user.length>0){
            bcrypt.compare(password, hashed_pass, (err, result)=> {
                if(result){
                    const token = jwt.sign({ course: 'backend' }, 'masai');
                return    res.send({"msg":"Login Successfull","token":token})
                } else {
                 return   res.send("Wrong Credentials")
                }
            });
        }else{
           return res.send("Wrong Credentials")
        }
    }catch(err){
      return  res.send("Something went wrong")
        console.log(err)
    } 
})

module.exports={
    userRouter
}