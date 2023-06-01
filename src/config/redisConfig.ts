import { createClient } from 'redis';

const redisClient = createClient({legacyMode: true});

redisClient.on('error', (err: any) => console.log('Redis Client Error', err));
 redisClient.connect();
redisClient.on('connect', () => console.log('Redis Client Connected'));

export default redisClient;
