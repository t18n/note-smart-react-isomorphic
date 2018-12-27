import Text from './index';

const Heading = Text.withComponent('h1');

Heading.defaultProps = {
  fontSize: 5,
  lineHeight: 1.5,
  m: 0,
};

export default Heading;
