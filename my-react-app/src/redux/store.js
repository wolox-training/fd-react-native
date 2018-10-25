import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { reducer as login } from './game/reducer';

const reducers = {
  login,
  form: formReducer
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
