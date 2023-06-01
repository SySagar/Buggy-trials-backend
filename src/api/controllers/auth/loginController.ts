import {
  generateAccessToken,
  generateRefreshToken,
} from "@utils/generateToken";
import userTypes from "@controllers/auth/types/userTypes";
import jwt from "jsonwebtoken";

const login = async (req: any, res: any) => {
  console.log("Login route hit");

  const username = req.body.username;
  const user: userTypes = { username: username } as userTypes;

  if (user === null)
    res
      .status(401)
      .json({ status: false, message: "username or password is not valid." });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return res.json({
    status: true,
    message: "login success",
    data: { accessToken, refreshToken },
  });
};

export default login;
