import { Router } from "express";
import User from "../models/user.js"
const UserRouter = Router()

UserRouter.post('/register',(req,res)=>{
    User.create(req.body)
   res.send('user registered successfully')
  })
export default UserRouter;