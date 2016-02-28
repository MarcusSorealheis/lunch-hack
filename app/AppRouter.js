import React from 'react';
import { Provider } from 'react-redux';
import { store, load } from './store/configureStore';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import IndexPage from './containers/IndexPage.js';
import Home from './components/Home.js';
import Foo from './components/Foo.js';
import Bar from './components/Bar.js';

const history = syncHistoryWithStore(browserHistory, store);

export default class AppRouter extends React.Component {
  componentDidMount() {
    load(store)
      .then((newState) => console.log('Loaded state:', newState))
      .catch((err) => console.log('Failed to load previous state', err));
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={IndexPage}>
            <IndexRoute component={Home} />
            <Route path="foo" component={Foo} />
            <Route path="bar" component={Bar} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
