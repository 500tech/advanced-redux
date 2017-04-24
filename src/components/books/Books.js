import React from 'react';
import PropTypes from 'prop-types';
import Controls from 'components/common/Controls';
import BooksInfo from './BooksInfo';

const books = [
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
];

const Books = () => (
  <div className="panel">
    <h3>Books</h3>

    <BooksInfo books={ books } />

    <Controls>
      <button>Reload</button>
    </Controls>
  </div>
);

Books.propTypes = {
};

export default Books;