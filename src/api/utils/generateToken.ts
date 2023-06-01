import jwt from "jsonwebtoken";
import userType from "./types/user";
import dotenv from "dotenv";
import redisClient from "@config/redisConfig";
dotenv.config();

const generateAccessToken = (user: userType) => {
  try{
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "120s" });
    return accessToken;
  }
  catch(err){
    console.log(err);
    }
};

const generateRefreshToken = (user: userType) => {
  try{

    const refresh_token : string = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    const userEmail : string = user.userEmail;
   
    redisClient.set(`${userEmail}`, `${refresh_token}`);
    return refresh_token;
  }catch(err){
    console.log(err);
  }
};

export { generateAccessToken, generateRefreshToken };
