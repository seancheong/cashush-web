import { db } from '../db';
import { SubscribersRecord } from '../pocketbase-types';

interface ErrorType {
  response: { data: { email: { code: 'validation_not_unique' } } };
}

export async function createSubscriber(record: SubscribersRecord) {
  try {
    await db.collection('subscribers').create(record);
  } catch (error) {
    // TODO: Handle the error
    if (
      (error as ErrorType).response.data.email.code === 'validation_not_unique'
    ) {
      return console.log('Subscriber already exists');
    }

    throw error;
  }
}
