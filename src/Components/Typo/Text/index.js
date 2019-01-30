import styled from 'styled-components';
import { Text as T } from 'rebass';

const Text = styled(T)`
  font-family: ${props => props.theme.fonts.body};
`;

Text.defaultProps = {
  color: 'white',
  fontSize: [0, 1, 2],
  lineHeight: 'body',
  m: 0,
};

export default Text;
