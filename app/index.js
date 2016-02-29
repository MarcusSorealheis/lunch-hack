import React from 'react';
import { render } from 'react-dom';
import AppRoot from './AppRoot.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './scss/index.scss';

import { store, load } from './store/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import makeRoutes from './Routes';

const history = syncHistoryWithStore(browserHistory, store);
const routes = makeRoutes(store);

load(store)
  .then((newState) => console.log('Loaded state:', newState))
  .catch((err) => console.log('Failed to load previous state', err));

// Needed for material-ui
injectTapEventPlugin();

render(<AppRoot history={history} routes={routes} store={store} />, document.body);
