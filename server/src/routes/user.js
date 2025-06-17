import { Router } from "express";
import User from "../models/user.js"
const UserRouter = Router()
import bcrypt from "bcrypt"
const saltRounds = 10

UserRouter.post('/register',async (req,res)=>{
    const user = await User.findOne({email : req.body.email})
     if (user) return res.send('email already taken')
    else{
  //hash the password
      req.body.password = await bcrypt.hash(req.body.password, saltRounds)
      //create the user in the db
      User.create(req.body)
    }
  return res.send('user registered') 
})
UserRouter.post ('/login',async(req, res)=>{
  const {email, password}=req.body
  //email should exist
  const user= await User.findOne({email: email})
  //no: return email not found
  if(!user) return res.send({message:'Email not found'})
    //yes:
  //check if password matches to that of db
})
export default UserRouter;