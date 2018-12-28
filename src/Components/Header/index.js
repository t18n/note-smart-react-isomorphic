import React from 'react';
import { Anchor, NavLink } from 'src/Components/Navigation';
import PropTypes from 'prop-types';

import logo from 'src/assets/images/full-logo.svg';

import Head from 'src/Components/Head';
import FlexBox from 'src/Components/FlexBox';
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
      <Brand to={`/${lang}`} src={logo} height="30px" />
      <FlexBox alignItems="center" justifyContent="flex-end">
        <NavLink to={`/${lang}/posts`} mr={[1, 2, 3]}>Posts</NavLink>
        <NavLink to={`/${lang}/books`} mr={[1, 2, 3]}>Books</NavLink>
        <NavLink to={`/${lang}/login`} mr={[1, 2, 3]}>Login</NavLink>
        <Anchor href="https://www.facebook.com/brightizen" mr={0} newpage textColor>Fanpage</Anchor>
      </FlexBox>
    </FlexBox>
  </MainNav>
);

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Header;
