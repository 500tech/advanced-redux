import React from 'react';
import Users from './users/Users';
import Books from './books/Books';

const App = () => (
  <div className="app">
    <h1>Redux deep dive</h1>
    <h2>by 500Tech</h2>

    <Users />
    <Books />
  </div>
);

export default App;
