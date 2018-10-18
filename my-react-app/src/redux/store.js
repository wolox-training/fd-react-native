import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as gameReducer } from './game/reducer';

const reducers = {
  gameReducer,
  form: formReducer
};

const reducer = combineReducers(reducers);

const store = createStore(reducer);
export default store;
