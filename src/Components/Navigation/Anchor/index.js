import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from 'rebass';

const Anchor = ({
  href, imgSrc, imgAlt, children, newpage, display, textColor, ...rest
}) => (
  <Box css={`display: ${display}`} {...rest}>
    <StyledAnchor
      href={href}
      target={newpage ? '_blank' : ''}
      rel={newpage ? 'noopener' : ''}
      textColor={textColor}
      {...rest}
    >
      {
        imgSrc
        && <img alt={imgAlt} src={imgSrc} {...rest} />
      }
      {children}
    </StyledAnchor>
  </Box>
);

const StyledAnchor = styled.a`
  justify-content: center;
  align-items: center;
  cursor: ${props => (props.href ? 'pointer' : 'default')};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  color: ${props => (props.textColor ? props.theme.colors.black : props.theme.colors.primary)};

  img {
    max-width: 100%;
    height: ${props => (props.imgheight)};
  }
`;

Anchor.defaultProps = {
  display: 'inline',
  underline: false,
  newpage: null,
  href: '#',
  imgheight: '40px',
  imgAlt: '',
  textColor: false,
};

Anchor.propTypes = {
  display: PropTypes.string,
  underline: PropTypes.bool,
  newpage: PropTypes.bool,
  href: PropTypes.string,
  imgheight: PropTypes.string,
  imgAlt: PropTypes.string,
  textColor: PropTypes.bool,
};

export default Anchor;
