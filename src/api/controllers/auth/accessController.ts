import redisClientInit from "@config/redisConfig";
import jwt from "jsonwebtoken";
import { generateAccessToken } from "@utils/generateToken";
import userTypes from "@controllers/auth/types/userTypes";

const accessController = async(req: any, res: any)=> {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);

    const redisClient = redisClientInit();

    const refreshTokenSet = redisClient.get("refresh-tokens");

    if (!(await refreshTokenSet).includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err: any, user: userTypes) => {
      if (err) return res.sendStatus(403);
      const accessToken = generateAccessToken(user);
      res.json({ accessToken: accessToken });
    });
  
};

export default accessController;
