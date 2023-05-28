import jwt from "jsonwebtoken";
import verificationType from "./types/verification";
import dotenv from "dotenv";
dotenv.config();

const verifyToken = ({ req, res, next, token }: verificationType) => {
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export default verifyToken;
