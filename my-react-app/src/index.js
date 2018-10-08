import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './scss/index.scss';
import Game from './app/components/baseComponents/Game';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
