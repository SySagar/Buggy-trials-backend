import {
  generateAccessToken,
  generateRefreshToken,
} from "@utils/generateToken";
import userTypes from "@controllers/auth/types/userTypes";
import redisClientInit from "@config/redisConfig";

// const test = (req : any, res : any)=>{
//     console.log(req);
//     res.send('Hello World');
// }

const login = (req: any, res: any) => {
  console.log("Login route hit");

  const redisClient = redisClientInit();
  // console.log(req);

  const username = req.body.username;
  const user: userTypes = { name: username } as object as userTypes;

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  redisClient.rPush("refresh-tokens", refreshToken);
  redisClient.expire("refresh-tokens", 60); //in milisecs

  res.json({ accessToken: accessToken, refreshToken: refreshToken });
};

export default login;
