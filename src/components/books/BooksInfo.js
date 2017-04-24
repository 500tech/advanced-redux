import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from 'components/users/UserInfo';

const BooksInfo = ({ books }) => (
  <ul>
    {
      books.map(book => (
        <li key={ book.name }>
          { book.name }
          <i> by <UserInfo user={ book.user }/></i>
        </li>
      ))
    }
  </ul>
);

BooksInfo.propTypes = {
  books: PropTypes.array.isRequired
};

export default BooksInfo;