import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ user }) => (
  <span>{ user.name }</span>
);

UserInfo.propTypes = {
  user: PropTypes.string.isRequired
};

export default UserInfo;