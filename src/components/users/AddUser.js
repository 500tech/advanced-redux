import React from 'react';
import Controls from 'components/common/Controls';
import PropTypes from 'prop-types';
import { connect } from 'mini-react-redux';

class AddUser extends React.Component {
  addUser = (e) => {
    e.preventDefault();

    this.props.addUser(this.name.value);

    this.name.value = '';
  };

  render() {
    return (
      <div className="panel small">
        <h3>Add User</h3>
        <Controls>
          <form onSubmit={ this.addUser }>
            <input type="text" ref={ elem => this.name = elem } />
            <button>Add</button>
          </form>
        </Controls>
      </div>
    )
  }
}

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (name) => dispatch({ type: 'ADD_USER', name })
});

export default connect(null, mapDispatchToProps)(AddUser);