import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { ApolloProvider } from 'react-apollo';

import theme from 'src/styles/theme';
import GlobalizeStyle from 'src/styles/global-styles';
import App from 'src/App';
import apolloClient from 'src/data';

const AppWrapper = ({ lang }) => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalizeStyle />
        <App lang={lang} />
      </React.Fragment>
    </ThemeProvider>
  </ApolloProvider>
);

AppWrapper.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default AppWrapper;
