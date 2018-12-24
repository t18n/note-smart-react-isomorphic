const theme = {};

// Baseline
theme.baseline = 8;
theme.halfBaseline = 4;

// Color
theme.colors = {
  primary: '#52c41a',
  secondary: '#95de64',
  success: '#52c41a',
  info: '#007bff',
  danger: '#dc3545',
  warning: '#ffc107',

  grey: '#919191',
  black: '#000000',
  white: '#FFFFFF',
};

// Font family
theme.fonts = {
  brand: 'Baumans',
  headline: '\'Alegreya Sans\', \'Times\', \'Georgia\'',
  body: '\'Roboto\', \'sans-serif\'',
};

// Breakpoint for Mobile first design
theme.breakpoints = {
  lgMobile: 'only screen and (min-width: 414px)',
  tablet: 'only screen and (min-width: 768px)',
  desktop: 'only screen and (min-width: 1024px)',
  mdDesktop: 'only screen and (min-width: 1280px)',
  lgDesktop: 'only screen and (min-width: 1600px)',
};

// General shadow
theme.shadows = {
  standard: '0 0 5px rgba(0, 0, 0, 0.15)',
  darker: '0 0 5px rgba(0, 0, 0, 0.5)',
};

export default theme;
