import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

const RedirectWithStatus = ({ from, to, httpStatus }) => (
  <Route
    render={({ staticContext }) => {
      // there is no `staticContext` on the client, so
      // we need to guard against that here
      if (staticContext) staticContext.status = httpStatus;
      return <Redirect from={from} to={to} />;
    }}
  />
);

RedirectWithStatus.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  httpStatus: PropTypes.number.isRequired,
};

export default RedirectWithStatus;
