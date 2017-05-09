import * as consts from 'consts/action-types';

export const addUser = (name) => ({
  type: consts.ADD_USER,
  payload: name
});

export const mergeUsers = (payload) => ({
  type: consts.MERGE_USERS,
  payload
});

export const fetchUsers = () => ({
  type: consts.API,
  payload: {
    url: 'simple/users.json',
    success: mergeUsers,
    name: 'users'
  },
  meta: {
    debounce: 500
  }
});