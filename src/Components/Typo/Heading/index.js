import styled from 'styled-components';
import { Heading as H } from 'rebass';

const Heading = styled(H)`
  font-family: ${props => props.theme.fonts.headline};
`;

Heading.defaultProps = {
  fontSize: [2, 3, 4],
  lineHeight: 'title',
  m: 0,
};

export default Heading;
