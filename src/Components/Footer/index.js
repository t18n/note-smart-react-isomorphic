import React from 'react';
import styled from 'styled-components';
import { Image, Box } from 'rebass';
import FlexBox from 'src/Components/FlexBox';
import { TextBlock } from 'src/Components/Typo';

const imagePath = require('src/static/images/full-logo.svg');

const BoxWithFooter = Box.withComponent('footer');

const StyledFooter = styled(BoxWithFooter)`
  width: 100%;
  min-height: max-content;
  position: absolute;
  bottom: 0;
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.oldPaperDarker};
  box-shadow: ${props => props.theme.boxShadows[0]};
`;

const Footer = () => (
  <StyledFooter py={[2, 3, 4]} px={[3, 4, 5]}>
    <FlexBox>
      <Image src={imagePath} alt="Brightizen" width="100px" />

      <TextBlock color="black">
        Copyright © 2018 Brightizen
      </TextBlock>
    </FlexBox>
  </StyledFooter>
);

export default Footer;
