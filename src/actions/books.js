export const addBook = (name, user) => ({
  type: 'ADD_BOOK',
  payload: { name, user }
});