import jwt from "jsonwebtoken";
import userType from "./types/user";
import dotenv from "dotenv";
import redisClient from "@config/redisConfig";
dotenv.config();

const generateAccessToken = (user: userType) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "120s" });
};

const generateRefreshToken = (user: userType) => {
  const refresh_token = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  const username = user.username;

  redisClient.set(username, refresh_token);
  return refresh_token;
};

export { generateAccessToken, generateRefreshToken };
