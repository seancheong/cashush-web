import { pb } from '../db';

export const getFaqs = async () => {
  return await pb.collection('faqs').getFullList({
    sort: 'order',
  });
};
