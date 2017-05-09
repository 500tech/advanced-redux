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
        : users.map(user => <li key={ user }>{ user }</li>)
    }
  </ul>
);

UsersInfo.propTypes = {
  users: PropTypes.array.isRequired,
  pending: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  pending: getRequestsCount(state, 'users') > 0
});

export default connect(mapStateToProps)(UsersInfo);