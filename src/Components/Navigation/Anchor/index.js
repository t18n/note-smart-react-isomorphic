import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Anchor = ({
  href, imgSrc, imgAlt, children, newpage, ...rest
}) => (
  <StyledAnchor
    href={href}
    target={newpage ? '_blank' : ''}
    rel={newpage ? 'noopener' : ''}
    {...rest}
  >
    {
      imgSrc
      && <img alt={imgAlt} src={imgSrc} {...rest} />
    }
    {children}
  </StyledAnchor>
);

const StyledAnchor = styled.a`
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: ${props => (props.href ? 'pointer' : 'default')};
  display: ${props => (props.display)};
  text-decoration: ${props => (props.underline)};
  color: ${props => props.theme.colors.secondary};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  img {
    width: ${props => (props.imgwidth)};
    height: ${props => (props.imgheight)};
  }
`;

Anchor.defaultProps = {
  display: 'inline-block',
  underline: null,
  newpage: null,
  href: '#',
  imgwidth: '100px',
  imgheight: '40px',
  imgAlt: '',
};

Anchor.propTypes = {
  display: PropTypes.string,
  underline: PropTypes.bool,
  newpage: PropTypes.bool,
  href: PropTypes.string,
  imgwidth: PropTypes.string,
  imgheight: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Anchor;
