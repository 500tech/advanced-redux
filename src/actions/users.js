import * as consts from 'consts/action-types';
import { getID } from 'lib/utils';
import * as schema from 'lib/schema';

export const addUser = (name) => ({
  type: consts.ADD_USER,
  payload: { id: getID(), name }
});

export const mergeUsers = (payload) => ({
  type: consts.MERGE_USERS,
  payload
});

export const fetchUsers = () => ({
  type: consts.API,
  payload: {
    name: 'users',
    url: 'api/users.json',
    normalize: [schema.users],
    success: data => mergeUsers(data.entities.users)
  },
  meta: {
    debounce: 500
  }
});