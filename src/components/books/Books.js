import React from 'react';
import PropTypes from 'prop-types';
import Controls from 'components/common/Controls';
import BooksInfo from './BooksInfo';
import { connect } from 'react-redux';

const Books = ({ books, addBook }) => (
  <div className="panel">
    <h3>Books</h3>

    <BooksInfo books={ books } />

    <Controls>
      <button onClick={ addBook }>Reload</button>
    </Controls>
  </div>
);

Books.propTypes = {
  books: PropTypes.array.isRequired,
  addBook: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = (dispatch) => ({
  addBook: () => dispatch({ type: 'ADD_BOOK', name: Math.random(), user: Math.random().toString() })
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);