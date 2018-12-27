import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { Link } from 'react-router-dom';

const NavLink = ({
  to, display, underline, ...rest
}) => (
  <Box css={`display: ${display}`} {...rest}>
    <StyledNavLink to={to} {...rest} />
  </Box>
);

const StyledNavLink = styled(Link)`
  cursor: pointer;
  text-align: center;
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  color: ${props => props.theme.colors.black};
  &:active, &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

NavLink.defaultProps = {
  display: 'inline',
  underline: false,
};

NavLink.propTypes = {
  display: PropTypes.string,
  to: PropTypes.string.isRequired,
  underline: PropTypes.bool,
};

export default NavLink;
