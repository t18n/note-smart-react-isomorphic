import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { ApolloProvider } from 'react-apollo';

import theme from 'src/styles/theme';
import GlobalizeStyle from 'src/styles/global-styles';
import RouteComponents from 'src/App/RouteComponents';
import apolloClient from 'src/data/ApolloClient';

const AppWrapper = ({ lang }) => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalizeStyle />
        <RouteComponents lang={lang} />
      </React.Fragment>
    </ThemeProvider>
  </ApolloProvider>
);

AppWrapper.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default AppWrapper;
