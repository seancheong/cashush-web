import { db } from '../db';

export const getFaqs = async () => {
  return await db.collection('faqs').getFullList({
    sort: 'order',
  });
};
