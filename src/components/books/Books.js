import React from 'react';
import PropTypes from 'prop-types';
import Controls from 'components/common/Controls';
import BooksInfo from './BooksInfo';
import { connect } from 'react-redux';
import { fetchBooks } from 'actions/books';

const Books = ({ books, fetchBooks }) => (
  <div className="panel">
    <h3>Books</h3>

    <BooksInfo books={ books } />

    <Controls>
      <button onClick={ fetchBooks }>Reload</button>
    </Controls>
  </div>
);

Books.propTypes = {
  books: PropTypes.array.isRequired,
  fetchBooks: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  books: state.books
});

export default connect(mapStateToProps, { fetchBooks })(Books);