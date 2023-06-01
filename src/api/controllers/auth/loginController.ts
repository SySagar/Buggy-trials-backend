import {
  generateAccessToken,
  generateRefreshToken,
} from "@utils/generateToken";
import userTypes from "@controllers/auth/types/userTypes";

const login = async (req: any, res: any) => {
  console.log("Login route hit");
  try{
    
    
    const userEmail = req.body.userEmail;
  const user: userTypes = { userEmail: userEmail } as userTypes;
  
  if (user === null)
    res
    .status(401)
      .json({ status: false, message: "userEmail or password is not valid." });
      
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      
      return res.json({
        status: true,
        message: "login success",
        data: { accessToken, refreshToken },
      });
    }catch(err){
      console.log(err);
    }
    };
    
    export default login;
