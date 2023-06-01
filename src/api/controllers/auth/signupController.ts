import {
  generateAccessToken,
  generateRefreshToken,
} from "@utils/generateToken";
import userTypes from "@controllers/auth/types/userTypes";

const signupController = (req : any,res : any) => {
  console.log("Signup route hit");

  console.log(req.body)
  const userEmail = req.body.userEmail;
  const user: userTypes = { userEmail: userEmail } as object as userTypes;


  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  // redisClient.expire("refresh-tokens", 60); //in milisecs

  res.json({ accessToken: accessToken });
  res.send({ accessToken: accessToken })
};

export default signupController;
