import '@babel/polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWrapper from 'src/App/AppWrapper';
import ScrollToTop from 'src/Components/ScrollToTop';

/* eslint-disable no-restricted-globals */
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const isEn = location.pathname.substr(1, 2) === 'en' && 'en';
    const isVi = location.pathname.substr(1, 2) === 'vi' && 'vi';
    const currentLang = isEn || isVi || 'en';
    return (
      <Router>
        <ScrollToTop>
          <AppWrapper lang={navigator && currentLang} />
        </ScrollToTop>
      </Router>
    );
  }
}
