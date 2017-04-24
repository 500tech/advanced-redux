import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ children }) => (
  <div className="controls">
    { children }
  </div>
);

Controls.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
};

export default Controls;