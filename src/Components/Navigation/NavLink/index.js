import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from 'src/Components/Layout';

const StyledLink = styled(Link)`
  display: ${props => props.display};
  cursor: pointer;
  text-decoration: ${props => (props.underline)};
  color: ${props => props.theme.colors.black};
  &:active, &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const NavLink = ({
  to, display, underline, ...rest
}) => (
  <Container {...rest}>
    <StyledLink to={to} display={display} underline={underline} {...rest} />
  </Container>
);

NavLink.defaultProps = {
  display: 'inline',
  underline: 'none',
};

NavLink.propTypes = {
  display: PropTypes.string,
  to: PropTypes.string.isRequired,
  underline: PropTypes.string,
};

export default NavLink;
