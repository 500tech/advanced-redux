import * as consts from 'consts/action-types';

export const startNetwork = (payload = 'global') => ({
  type: consts.START_NETWORK,
  payload
});

export const endNetwork= (payload = 'global') => ({
  type: consts.END_NETWORK,
  payload
});