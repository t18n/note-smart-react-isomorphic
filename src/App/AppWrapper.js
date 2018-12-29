import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'src/styles/theme';
import GlobalizeStyle from 'src/styles/global-styles';
import App from 'src/App';

const AppWrapper = ({ lang }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalizeStyle />
      <App lang={lang} />
    </React.Fragment>
  </ThemeProvider>
);

AppWrapper.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default AppWrapper;
