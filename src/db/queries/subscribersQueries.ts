import { db } from '../db';
import { InsertSubscriber, subscribersTable } from '../schema';

export async function createSubscriber(data: InsertSubscriber) {
  await db
    .insert(subscribersTable)
    .values(data)
    .onConflictDoNothing({ target: subscribersTable.email });
}
