import React from 'react';
import { render } from 'react-dom';
import AppRouter from './AppRouter.js';
import './scss/index.scss';

const rootInstance = render(<AppRouter />, document.body);

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    // Help React Hot Loader figure out the root component instances on the page:
    getRootInstances: () => [rootInstance],
  });
}
