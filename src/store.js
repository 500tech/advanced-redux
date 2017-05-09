import { createStore } from 'mini-redux';

const initialState = {
  users: ['Suziq', 'Kipi'],
  books: [
    {
      name: 'Die Slowly',
      user: 'Germany'
    },
    {
      user: 'Israel',
      name: 'Hard nut'
    },
    {
      name: 'The Glass Trap',
      user: 'Poland'
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, {
        users: state.users.concat(action.name)
      });

    case 'ADD_BOOK':
      const newBook = {
        name: action.name,
        user: action.user
      };

      return Object.assign({}, state, {
        books: state.books.concat(newBook)
      });

    default:
      return state;
  }
};

window.store = createStore(reducer, initialState);

export default window.store;