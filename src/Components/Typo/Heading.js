import styled from 'styled-components';
import { Heading } from 'rebass';

const StyledHeading = styled(Heading)`
  font-family: ${props => props.theme.fonts.headline};
`;

StyledHeading.defaultProps = {
  fontSize: [2, 3, 4],
  lineHeight: 'title',
  m: 0,
};

const H1 = StyledHeading.withComponent('h1');
const H2 = StyledHeading.withComponent('h2');
const H3 = StyledHeading.withComponent('h3');

export {
  H1,
  H2,
  H3,
};
