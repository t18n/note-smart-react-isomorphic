import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => <div>{children}</div>;

Content.defaultProps = {
  children: undefined,
};

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Content;
