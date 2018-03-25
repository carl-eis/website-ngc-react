import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist';

import store, { history } from '~/redux/store';
import App from '~/app';

import registerServiceWorker from '~/redux/scripts/registerServiceWorker';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target,
);

registerServiceWorker();
