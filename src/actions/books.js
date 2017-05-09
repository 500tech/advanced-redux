import * as consts from 'consts/action-types';
import { createAction } from 'redux-actions';
import { mergeUsers } from 'actions/users';
import { getID } from 'lib/utils';
import * as schema from 'lib/schema';
import { setList } from 'actions/ui';

export const addBook = (name, user) => ({
  type: consts.ADD_BOOK,
  payload: { id: getID(), name, user }
});

export const mergeBooks = createAction(consts.MERGE_BOOKS);

const buildUrl = (type, page) => `api/${ type }${ page ? '_' + page : '' }.json`;

export const fetchBooks = (type = 'books', page = 0) => ({
  type: consts.API,
  payload: {
    name: type,
    url: buildUrl(type, page),
    normalize: [schema.books],
    success: ({ entities, result })=> [
      mergeUsers(entities.users),
      mergeBooks(entities.books),
      setList(type, result)
    ]
  }
});

export const fetchTopFive = () => fetchBooks('top_five');
