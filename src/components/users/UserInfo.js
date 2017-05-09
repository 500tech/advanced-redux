import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserInfo = ({ user }) => (
  <span>{ user.name }</span>
);

UserInfo.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  user: state.users[ownProps.id]
});

export default connect(mapStateToProps)(UserInfo);