import { drizzle } from 'drizzle-orm/postgres-js';
import PocketBase from 'pocketbase';
import postgres from 'postgres';

import { TypedPocketBase } from './pocketbase-types';

const client = postgres(process.env.DATABASE_URL || '');

export const db = drizzle(client);

export const pb = new PocketBase(process.env.PB_TYPEGEN_URL) as TypedPocketBase;
