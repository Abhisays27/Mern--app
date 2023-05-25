import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register",async(req,res)=>{
    const {username , password} = req.body;  //sent the data from front end to backend
    const user = await UserModel.findOne({username});  //search username from database
    if (user){
        return res.json({message: "User already exists!"})
    }
    const hashedPassword = await bcrypt.hash(password, 10);  //hashing passwords

    const newUser = UserModel({username, password:hashedPassword});   //adding data in database
    await newUser.save();

    res.json({message: "User Registered Successfully"});
  });
router.post("/login", async(req,res)=>{
    const {username , password} = req.body;
    const user = await UserModel.findOne({username});

if(!user) {
    return res.json({message: "User Dosen't Exits!"})
}

const isPasswordValid = await bcrypt.compare(password,user.password);
if(!isPasswordValid){
    return res.json({message:"Password is incorrect"});
}

const token = jwt.sign({id:user._id},"secret");
res.json({token, userID: user._id});

});
export {router as userRouter}

export const verifyToken = (req,res,next) => {   //middleware
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token,"secret", (err) => {
            if (err) return res.sendStatus(403);
            next();
        });
    }else{
        res.sendStatus(401);
    }

}
