import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const HttpStatus = ({ httpStatus, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = httpStatus;
      return children;
    }}
  />
);

HttpStatus.propTypes = {
  httpStatus: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HttpStatus;
