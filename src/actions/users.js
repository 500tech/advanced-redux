import { ADD_USER } from 'consts/action-types';

export const addUser = (name) => ({
  type: ADD_USER,
  payload: name
});