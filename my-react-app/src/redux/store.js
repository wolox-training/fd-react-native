import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as name } from './game/reducer';

const reducers = {
  name,
  form: formReducer
};

const reducer = combineReducers(reducers);

const store = createStore(reducer);
export default store;
