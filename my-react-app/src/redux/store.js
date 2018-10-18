import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Reducer from './game/reducer';

const reducers = {
  Reducer,
  form: formReducer
};

const reducer = combineReducers(reducers);

const store = createStore(reducer);
export default store;
