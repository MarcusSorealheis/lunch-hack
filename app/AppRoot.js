import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class AppRouter extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    routes: React.PropTypes.element.isRequired,
    store: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <Router
          history={this.props.history}
          routes={this.props.routes}
          onUpdate={() => window.scrollTo(0, 0)}
        />
      </Provider>
    );
  }
}
