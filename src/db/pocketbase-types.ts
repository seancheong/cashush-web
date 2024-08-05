/**
 * This file was @generated using pocketbase-typegen
 */
import type PocketBase from 'pocketbase';
import type { RecordService } from 'pocketbase';

export enum Collections {
  Faqs = 'faqs',
  Subscribers = 'subscribers',
  Users = 'users',
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
  id: RecordIdString;
  created: IsoDateString;
  updated: IsoDateString;
  collectionId: string;
  collectionName: Collections;
  expand?: T;
};

export type AuthSystemFields<T = never> = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type FaqsRecord = {
  answer: HTMLString;
  order: number;
  question: string;
};

export type SubscribersRecord = {
  email: string;
  optIn?: boolean;
};

export type UsersRecord = {
  avatar?: string;
  name?: string;
};

// Response types include system fields and match responses from the PocketBase API
export type FaqsResponse<Texpand = unknown> = Required<FaqsRecord> &
  BaseSystemFields<Texpand>;
export type SubscribersResponse<Texpand = unknown> =
  Required<SubscribersRecord> & BaseSystemFields<Texpand>;
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> &
  AuthSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  faqs: FaqsRecord;
  subscribers: SubscribersRecord;
  users: UsersRecord;
};

export type CollectionResponses = {
  faqs: FaqsResponse;
  subscribers: SubscribersResponse;
  users: UsersResponse;
};

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: 'faqs'): RecordService<FaqsResponse>;
  collection(idOrName: 'subscribers'): RecordService<SubscribersResponse>;
  collection(idOrName: 'users'): RecordService<UsersResponse>;
};
