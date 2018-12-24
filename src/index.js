import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppRoot from './App/AppRoot';

const render = (Component) => {
  hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};
render(AppRoot);

// Enable Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App/AppRoot.js', () => {
    const NewAppRoot = require('./App/AppRoot.js').default; // eslint-disable-line global-require
    render(NewAppRoot);
  });
}
