import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { reducer as game } from './game/reducer';
import { reducer as login } from './login/reducer';

const reducers = {
  form: formReducer,
  game,
  login
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
