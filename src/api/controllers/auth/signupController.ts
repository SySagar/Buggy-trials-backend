import {createUser,userExistsByEmail,userExistsByUsername} from '@repository/user'
import userTypes from "@controllers/auth/types/userTypes";
import {hashPassword} from '@utils/bcrypt'

const signupController = async (req : any,res : any) => {
  console.log("Signup route hit");

  console.log(req.body)
  const userEmail = req.body.userEmail;
  const username = req.body.profile.username;
  const user: userTypes = { userEmail: userEmail } as object as userTypes;

  if(await userExistsByEmail(userEmail)){
  return res.json({status:400,message:"This email already exists"})
  }
  if(await userExistsByUsername(username)){
    return res.json({status:400,message:"This username already exists"})
  }

  const hashedPassword = await hashPassword(req.body.password)
  const data = req.body
  data.password = hashedPassword

    if(!await createUser(data)) {
      console.log("Error creating user")
			return res.sendStatus(400)
		}
		return res.sendStatus(201)
  
  res.json({ status: 200, message: "Signup done!", user });
};

export default signupController;
