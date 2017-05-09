import React from 'react';
import Controls from '../common/Controls';
import UsersInfo from './UsersInfo';
import { connect } from 'mini-react-redux';
import PropTypes from 'prop-types';

const Users = ({ users, addUser }) => (
      <div className="panel">
        <h3>Users</h3>

        <UsersInfo users={ users }/>

        <Controls>
          <button onClick={ addUser }>Reload</button>
        </Controls>
      </div>
    );

Users.propTypes = {
  users: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch({ type: 'ADD_USER', name: Math.random() })
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);