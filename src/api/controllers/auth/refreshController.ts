import { generateAccessToken } from "@utils/generateToken";

const refreshController = async (req: any, res: any) => {
  console.log("Refresh route hit");

  const username = req.userData.username;
  console.log(username);
  const user = { username: username };
  const accessToken = generateAccessToken(user);

  res.json({
    status: true,
    message: "new access token generated",
    data: { accessToken },
  });
};

export default refreshController;
