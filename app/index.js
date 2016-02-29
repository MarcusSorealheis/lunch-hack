import React from 'react';
import { render } from 'react-dom';
import AppRouter from './AppRouter.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './scss/index.scss';

// Needed for onTouchTap in material ui
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const rootInstance = render(<AppRouter />, document.body);
