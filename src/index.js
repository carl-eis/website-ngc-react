import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist';

import store, { history } from '~/redux/store';
import App from '~/app';

import registerServiceWorker from '~/redux/scripts/registerServiceWorker';

const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    { /*   <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
</ConnectedRouter> */}
    <HashRouter history={history}>
      <div>
        <App />
      </div>
    </HashRouter>
  </Provider>,
  target,
);

registerServiceWorker();
