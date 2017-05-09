import React from 'react';
import Users from './users/Users';
import Books from './books/Books';
import TopFive from './books/TopFive';
import AddUser from './users/AddUser';
import AddBook from './books/AddBook';
import Spinner from 'components/common/Spinner';
import { connect } from 'react-redux';
import { getRequestsCount } from 'reducers/ui';

const App = ({ network }) => (
  <div className="app">
    <h1>Redux deep dive</h1>
    <h2>by 500Tech ({ network })</h2>

    { network > 0 ? <Spinner /> : '' }

    <Users />
    <Books />
    <TopFive />

    <AddUser />
    <AddBook />
  </div>
);

const mapStateToProps = state => ({
  network: getRequestsCount(state)
});

export default connect(mapStateToProps)(App);
