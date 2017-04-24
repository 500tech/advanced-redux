import React from 'react';
import PropTypes from 'prop-types';

const UsersInfo = ({ users }) => (
  <ul>
    { users.map(user => <li key={ user }>{ user }</li>) }
  </ul>
);

UsersInfo.propTypes = {
  users: PropTypes.array.isRequired
};

export default UsersInfo;