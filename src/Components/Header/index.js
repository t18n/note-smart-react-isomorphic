import React from 'react';
import { NavLink } from 'src/Components/Navigation';
import PropTypes from 'prop-types';

import logo from 'src/static/images/logo.svg';

import Head from 'src/Components/Head';
import { FlexBox } from 'src/Components/Layout';
import MainNav from './MainNav';
import Brand from './Brand';

const Header = ({ lang, ...rest }) => (
  <MainNav
    bg="oldPaper"
    boxShadow={1}
    width={1}
    py={[1, 2, 3]}
    px={[3, 4, 5]}
  >
    <Head {...rest} />
    <FlexBox
      width={1}
      alignItems="center"
      justifyContent="space-between"
    >
      <Brand to={`/${lang}`} src={logo} height="60px" />
      <FlexBox alignItems="center" justifyContent="flex-end">
        <NavLink to={`/${lang}/posts`} mr={[1, 2, 3]}>Posts</NavLink>
        <NavLink to={`/${lang}/books`} mr={[1, 2, 3]}>Books</NavLink>
        <NavLink to={`/${lang}/login`} mr={[1, 2, 3]}>Login</NavLink>
      </FlexBox>
    </FlexBox>
  </MainNav>
);

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Header;
