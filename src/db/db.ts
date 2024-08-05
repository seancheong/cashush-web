import PocketBase from 'pocketbase';

import { TypedPocketBase } from './pocketbase-types';

export const db = new PocketBase(process.env.PB_TYPEGEN_URL) as TypedPocketBase;
