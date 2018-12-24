import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const NavLink = ({ to, ...rest }) => (
  <StyledNavLink to={to} {...rest} />
);

const StyledNavLink = styled(Link)`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: ${props => props.display};
  text-decoration: ${props => props.underline};
`;

NavLink.defaultProps = {
  display: 'inline',
  underline: 'none',
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  display: PropTypes.string,
  underline: PropTypes.string,
};

export default NavLink;
