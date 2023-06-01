import { generateAccessToken } from "@utils/generateToken";
import userType from "@utils/types/user";

const refreshController = async (req: any, res: any) => {
  console.log("Refresh route hit");

  const userEmail = req.userData.userEmail;
  console.log(userEmail);
  const user = { userEmail: userEmail } as userType;
  const accessToken = generateAccessToken(user);

  res.json({
    status: true,
    message: "new access token generated",
    data: { accessToken },
  });
};

export default refreshController;
