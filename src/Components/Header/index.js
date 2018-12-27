import React from 'react';
import { Anchor, NavLink } from 'src/Components/Navigation';
import PropTypes from 'prop-types';

import logo from 'src/assets/images/full-logo.svg';
import { FluidContainer } from 'src/Components/Container';
import MainNav from './MainNav';
import Brand from './Brand';

const Header = ({ lang }) => (
  <MainNav
    py={[1, 2, 3]}
    px={[3, 4, 5]}
    bg="oldPaper"
    boxShadow={1}
    alignItems="center"
    justifyContent="space-between"
  >
    <Brand to={`/${lang}`} src={logo} height="30px" />
    <FluidContainer>
      <NavLink to={`/${lang}/about`} mr={2}>About</NavLink>
      <NavLink to={`/${lang}/posts`} mr={2}>Posts</NavLink>
      <NavLink to={`/${lang}/books`} mr={2}>Books</NavLink>
      <NavLink to={`/${lang}/login`} mr={2}>Login</NavLink>
      <Anchor href="https://www.facebook.com/brightizen" newpage textColor>Fanpage</Anchor>
    </FluidContainer>
  </MainNav>
);

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Header;
