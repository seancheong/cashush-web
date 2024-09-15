import { createClient } from 'redis';

export const createRedisClient = async () => {
  const client = createClient({
    password: process.env.REDIS_PASS,
    socket: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 11035,
    },
  });

  await client.connect();

  return client;
};
