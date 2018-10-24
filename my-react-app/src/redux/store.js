import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as game } from './game/reducer';
import { reducer as login } from './login/reducer';

export const history = createHistory();

const middleware = routerMiddleware(history);

const rootReducer = combineReducers({
  login,
  game,
  form: formReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, middleware));
