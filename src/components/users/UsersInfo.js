import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/common/Spinner';
import { getRequestsCount } from 'reducers/ui';
import { connect } from 'react-redux';

const UsersInfo = ({ users, pending }) => (
  <ul>
    {
      pending
        ? <Spinner />
        : users.map(user => <li key={ user.id }>{ user.name }</li>)
    }
  </ul>
);

UsersInfo.propTypes = {
  users: PropTypes.array.isRequired,
  pending: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  pending: getRequestsCount(state, 'users') > 0,
  users: ownProps.list.map(id => state.users[id])
});

export default connect(mapStateToProps)(UsersInfo);