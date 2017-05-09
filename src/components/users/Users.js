import React from 'react';
import Controls from '../common/Controls';
import UsersInfo from './UsersInfo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers } from 'actions/users';

const Users = ({ list, fetchUsers }) => (
      <div className="panel">
        <h3>Users</h3>

        <UsersInfo list={ list }/>

        <Controls>
          <button onClick={ fetchUsers }>Reload</button>
        </Controls>
      </div>
    );

Users.propTypes = {
  list: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  list: Object.keys(state.users)
});

export default connect(mapStateToProps, { fetchUsers })(Users);