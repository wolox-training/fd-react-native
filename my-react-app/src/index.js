import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import Game from './app/screens/Game';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
