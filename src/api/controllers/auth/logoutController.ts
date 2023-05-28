import redisClientInit from "@config/redisConfig";

const logoutController = async (req: any, res: any) => {
  const redisClient = redisClientInit();
  redisClient.del("refresh-tokens");

  res.send("Logged out successfully");
};

export default logoutController;
