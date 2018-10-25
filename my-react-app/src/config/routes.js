import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from '../redux/store';
import Game from '../app/screens/Game';
import Login from '../app/screens/Login';

export const routes = {
  GAME: '/game',
  LOGIN: '/'
};

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.LOGIN} component={Login} />
        <Route path={routes.GAME} component={Game} />
      </Switch>
    </ConnectedRouter>
  );
}
export default AppRoutes;
