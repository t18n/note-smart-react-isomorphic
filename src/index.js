import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Client from './App/Client';

/*
* Define a render method to make another component wrapped inside
* <AppContainer/> for to allow Hot Loader for development via `hydrate`
* Then render inside a HTML element called #app
*/
const render = (Component) => {
  hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

// By default, render a client
render(Client);

/*
* If Hot Module Replacement has been enabled via the HotModuleReplacementPlugin
* Accept update for Client app
* Then render a new Client app with predefined `render` method
*/
if (module.hot) module.hot.accept('./App/Client.js', () => render(Client));
