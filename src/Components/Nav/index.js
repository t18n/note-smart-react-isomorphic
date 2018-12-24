import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Anchor } from 'src/Components/Navigation';
import PropTypes from 'prop-types';

const Nav = ({ lang }) => (
  <div>
    <Link to={`/${lang}`}>
      <span>Brightizen</span>
    </Link>
    <ul>
      <li>
        <NavLink to={`/${lang}/about`}>About</NavLink>
      </li>
      <li>
        <NavLink to={`/${lang}/posts`}>
          Article
        </NavLink>
      </li>
      <li>
        <NavLink to={`/${lang}/books`}>
          Books
        </NavLink>
      </li>
      <li>
        <NavLink to={`/${lang}/login`}>
          Login
        </NavLink>
      </li>
      <li>
        <Anchor href="https://www.facebook.com/brightizen" newpage>
          Fanpage
        </Anchor>
      </li>
    </ul>
  </div>
);

Nav.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Nav;
