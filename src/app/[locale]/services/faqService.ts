import { FaqsResponse } from '@/db/pocketbase-types';
import { getFaqsQuery } from '@/db/queries/faqsQueries';
import { createRedisClient } from '@/services/redisService';
import { createClient } from 'redis';

const FAQ_CACHE_KEY = 'cashush-faqs';

let redisClient: ReturnType<typeof createClient>;

export const getFaqs = async () => {
  if (!redisClient) redisClient = await createRedisClient();

  const cache = await redisClient.get(FAQ_CACHE_KEY);

  if (cache) return JSON.parse(cache) as FaqsResponse[];

  const faqs = await getFaqsQuery();

  await redisClient.set(FAQ_CACHE_KEY, JSON.stringify(faqs), {
    EX: 60 * 60 * 24, // expires in 1 day
  });

  return faqs;
};
