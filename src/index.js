import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Client from './App/Client';

const render = (Component) => {
  hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};
render(Client);

// Enable Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App/Client.js', () => {
    const NewClient = require('./App/Client.js').default; // eslint-disable-line global-require
    render(NewClient);
  });
}
