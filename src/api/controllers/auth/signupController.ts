import {
  generateAccessToken,
  generateRefreshToken,
} from "@utils/generateToken";
import userTypes from "@controllers/auth/types/userTypes";
import redisClient from "@config/redisConfig";

const signupController = (req : any,res : any) => {
  console.log("Signup route hit");

  console.log(req.body)
  const username = req.body.username;
  const user: userTypes = { name: username } as object as userTypes;


  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  // redisClient.expire("refresh-tokens", 60); //in milisecs

  res.json({ accessToken: accessToken });
  res.send({ accessToken: accessToken })
};

export default signupController;
