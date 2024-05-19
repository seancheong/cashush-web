import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const subscribersTable = pgTable('subscribers_table', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  optIn: boolean('opt_in').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertSubscriber = typeof subscribersTable.$inferInsert;
