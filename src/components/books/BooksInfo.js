import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from 'components/users/UserInfo';
import Spinner from 'components/common/Spinner';
import { getRequestsCount } from 'reducers/ui';
import { connect } from 'react-redux';

const BooksInfo = ({ books, pending }) => (
  <ul>
    {
      pending
        ? <Spinner />
        : books.map(book => (
            <li key={ book.id }>
              { book.name }
              <i> by <UserInfo id={ book.user }/></i>
            </li>
          ))
    }
  </ul>
);

BooksInfo.propTypes = {
  books: PropTypes.array.isRequired,
  pending: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  pending: getRequestsCount(state, ownProps.type) > 0,
  books: ownProps.list.map(id => state.books[id])
});

export default connect(mapStateToProps)(BooksInfo);