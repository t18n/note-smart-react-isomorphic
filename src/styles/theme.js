const theme = {};

// Color names that can be used in color, bg, and borderColor props
theme.colors = {
  // Brand
  primary: '#FF6D00',
  secondary: '#FF9800',

  // Message
  success: '#a0d911',
  danger: '#f5222d',
  warning: '#fadb14',
  info: '#1890ff',

  // Basic
  grey: '#8c8c8c',
  black: '#001F00',
  white: '#fdfdfc',
};

// Array of viewport widths to use for min-width media queries - Mobile first
theme.breakpoints = [32, 48, 64, 80]; // em

// Array of max Row width according to breakpoints above
theme.maxRowWidth = [500, 700, 960, 1200]; // px

// Values for the fontFamily prop
theme.fonts = {
  brand: 'Righteous',
  headline: '\'Alegreya Sans\', \'Times\', \'Georgia\'',
  body: '\'Roboto\', \'sans-serif\'',
};

// Values for fontWeight prop
theme.fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// Array of numbers to use as a typographic scale
theme.fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128];

// Array of numbers for use as margin and pixel values
theme.space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

// Values for lineHeight prop
theme.lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
};

// Values for letterSpacing prop
theme.letterSpacings = {
  normal: 'normal',
  tracked: '0.1em',
  tight: '-0.05em',
  mega: '0.25em',
};

// Borders
theme.borders = [0, '1px solid', '2px solid', '4px solid'];

// Values for borderRadius props
theme.radius = [0, 2, 4, 16, 9999, '100%'];

// Transition styles
theme.transition = {
  easeInOut: 'cubic-bezier(0.5, 0, 0.25, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.25, 1)',
  easeIn: 'cubic-bezier(0.5, 0, 1, 1)',
};

// Transition duration
theme.transitionDur = {
  slow: '360ms',
  normal: '220ms',
  fast: '100ms',
};

// Values for boxShadow prop
theme.shadows = {
  small: '0 0 4px rgba(0, 0, 0, .125)',
  large: '0 0 24px rgba(0, 0, 0, .125)',
};

export default theme;
