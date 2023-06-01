import redisClient from "@config/redisConfig";

const logoutController = async (req: any, res: any) => {

    console.log("Logout route hit");
    const username = req.userData.username;
    const token = req.token;
    // remove the refresh token
    await redisClient.del(username);
    
    return res.json({status: true, message: "logout successful"});

};

export default logoutController;
