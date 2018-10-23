import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Game from '../app/components/Game';
import Login from '../app/components/Login';

export const routes = {
  GAME: '/game',
  LOGIN: '/'
};

function AppRoutes() {
  return (
    <Switch>
      <Route exact path={routes.LOGIN} component={Login} />
      <Route path={routes.GAME} component={Game} />
    </Switch>
  );
}
export default AppRoutes;
