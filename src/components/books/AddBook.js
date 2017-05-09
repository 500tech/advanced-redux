import React from 'react';
import Controls from 'components/common/Controls';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from 'actions/books';

class AddBook extends React.Component {
  addBook = (e) => {
    e.preventDefault();

    this.props.addBook(this.name.value, parseInt(this.user.value, 10));

    this.name.value = '';
  };

  render() {
    return (
      <div className="panel small">
        <h3>Add Book</h3>
        <Controls>
          <form onSubmit={ this.addBook }>
            <input type="text" ref={ elem => this.name = elem } />
            <select ref={ elem => this.user = elem }>
              { this.props.users.map(user => <option key={ user.id } value={ user.id }>{ user.name }</option> )}
            </select>
            <button>Add</button>
          </form>
        </Controls>
      </div>
    )
  }
}

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  users: Object.values(state.users)
});

export default connect(mapStateToProps, { addBook })(AddBook);