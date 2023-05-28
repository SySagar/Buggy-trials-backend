import jwt from "jsonwebtoken";
import userType from "./types/user";
import dotenv from "dotenv";
dotenv.config();

const generateAccessToken = (user: userType) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "120s" });
};

const generateRefreshToken = (user: userType) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
};

export { generateAccessToken, generateRefreshToken };
