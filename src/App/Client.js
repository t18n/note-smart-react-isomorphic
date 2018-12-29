import '@babel/polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWrapper from 'src/App/AppWrapper';
import ScrollToTop from 'src/Components/ScrollToTop';
import { getLocaleOnClient } from 'src/i18n/helpers';

/* eslint-disable no-restricted-globals */
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Determine current language by name
    const currentLang = getLocaleOnClient(location);

    return (
      <Router>
        <ScrollToTop>
          <AppWrapper lang={currentLang} />
        </ScrollToTop>
      </Router>
    );
  }
}
