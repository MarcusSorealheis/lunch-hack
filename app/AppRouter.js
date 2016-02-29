import React from 'react';
import { Provider } from 'react-redux';
import { store, load } from './store/configureStore';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import PageWrapper from './containers/PageWrapper.js';
import Intro from './components/Intro.js';
import Applicant from './containers/Applicant.js';
import Household from './containers/Household.js';
import Contact from './containers/Contact.js';
import Review from './containers/Review.js';

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
          <Route path="/" component={PageWrapper}>
            <IndexRoute component={Intro} />
            <Route path="applicant" component={Applicant} />
            <Route path="household" component={Household} />
            <Route path="contact" component={Contact} />
            <Route path="review" component={Review} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
