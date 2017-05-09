import React from 'react';
import PropTypes from 'prop-types';
import Controls from 'components/common/Controls';
import BooksInfo from './BooksInfo';
import { connect } from 'react-redux';
import { fetchBooks } from 'actions/books';
import { getList } from 'reducers/ui';

const Books = ({ list, fetchBooks }) => (
  <div className="panel">
    <h3>Books</h3>

    <BooksInfo list={ list } type='books' />

    <Controls>
      <button onClick={ () => fetchBooks('books', 0) }>Page 1</button>
      <button onClick={ () => fetchBooks('books', 1) }>Page 2</button>
      <button onClick={ () => fetchBooks('books', 2) }>Page 3</button>
    </Controls>
  </div>
);

Books.propTypes = {
  list: PropTypes.array.isRequired,
  fetchBooks: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  list: getList(state, 'books')
});

export default connect(mapStateToProps, { fetchBooks })(Books);