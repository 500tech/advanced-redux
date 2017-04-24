import React from 'react';
import Controls from '../common/Controls';
import UsersInfo from './UsersInfo';

const users = ['Suziq', 'Kipi'];

const Users = () => (
  <div className="panel">
    <h3>Users</h3>

    <UsersInfo users={ users } />

    <Controls>
      <button>Reload</button>
    </Controls>
  </div>
);

Users.propTypes = {
};

export default Users;