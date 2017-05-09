import React from 'react';
import PropTypes from 'prop-types';
import Controls from 'components/common/Controls';
import BooksInfo from './BooksInfo';
import { connect } from 'react-redux';
import { fetchTopFive } from 'actions/books';
import { getList } from 'reducers/ui';

const TopFive = ({ list, fetchTopFive }) => (
  <div className="panel">
    <h3>Top Five</h3>

    <BooksInfo list={ list } type='top_five' />

    <Controls>
      <button onClick={ fetchTopFive }>Reload</button>
    </Controls>
  </div>
);

TopFive.propTypes = {
  list: PropTypes.array.isRequired,
  fetchTopFive: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  list: getList(state, 'top_five')
});

export default connect(mapStateToProps, { fetchTopFive })(TopFive);