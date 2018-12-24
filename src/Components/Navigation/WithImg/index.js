import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Anchor from 'src/Components/Navigation';

const AnchorWithImg = ({
  href, imgSrc, imgAlt, children, newpage, className, ...rest
}) => (
  <StyledAnchorWithImg className={className} href={href} target={newpage ? '_blank' : ''} {...rest}>
    {imgSrc && <img alt={imgAlt} src={imgSrc} {...rest} />}
    {children}
  </StyledAnchorWithImg>
);

const StyledAnchorWithImg = styled(Anchor)`
  img {
    width: ${props => (props.imgwidth)};
    height: ${props => (props.imgheight)};
  }
`;

AnchorWithImg.defaultProps = {
  display: 'inline-block',
  underline: null,
  newpage: null,
  href: '#',
  imgwidth: '100px',
  imgheight: '40px',
  imgAlt: '',
  className: '',
};

AnchorWithImg.propTypes = {
  display: PropTypes.string,
  underline: PropTypes.bool,
  newpage: PropTypes.bool,
  href: PropTypes.string,
  imgwidth: PropTypes.string,
  imgheight: PropTypes.string,
  imgAlt: PropTypes.string,
  className: PropTypes.string,
};

export default AnchorWithImg;
