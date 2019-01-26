import '@babel/polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWrapper from 'src/App/AppWrapper';
import ScrollToTop from 'src/Components/ScrollToTop';
import { getLocaleOnClient } from 'src/i18n/utils';

const ClientApp = () => (
  <Router>
    <ScrollToTop>
      <AppWrapper lang={getLocaleOnClient(window.location)} />
    </ScrollToTop>
  </Router>
);

export default ClientApp;
