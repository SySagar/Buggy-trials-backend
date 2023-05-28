import { RedisClientType } from "redis";
import * as redis from "redis";

const redisClientInit = () => {
  const redisClient = redis.createClient();
  redisClient.connect();
  return redisClient;
};

export default redisClientInit;
