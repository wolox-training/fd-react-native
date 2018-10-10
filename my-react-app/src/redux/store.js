import { createStore } from 'redux';

import Reducer from './game/reducer';

export const store = createStore(Reducer);
