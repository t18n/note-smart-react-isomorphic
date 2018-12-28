import styled from 'styled-components';
import { Text } from 'rebass';

const StyledText = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
`;

StyledText.defaultProps = {
  fontSize: [0, 1, 2],
  lineHeight: 'body',
  m: 0,
};

export const TextBlock = StyledText.withComponent('div');
export const P = StyledText.withComponent('p');
export const Span = StyledText.withComponent('span');
export const Small = StyledText.withComponent('small');
