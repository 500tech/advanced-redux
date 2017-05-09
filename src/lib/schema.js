import { schema } from 'normalizr';

export const users = new schema.Entity('users');
export const books = new schema.Entity('books', { user: users });
