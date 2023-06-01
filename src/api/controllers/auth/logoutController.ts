import redisClient from "@config/redisConfig";

const logoutController = async (req: any, res: any) => {

    console.log("Logout route hit");
    const userEmail : string = req.userData.userEmail;
    const token = req.token;
    // remove the refresh token
    await redisClient.del(userEmail);
    
    return res.json({status: true, message: "logout successful"});

};

export default logoutController;
