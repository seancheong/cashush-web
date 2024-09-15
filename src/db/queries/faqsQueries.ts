import { db } from '../db';

export const getFaqsQuery = async () => {
  return await db.collection('faqs').getFullList({
    sort: 'order',
  });
};
