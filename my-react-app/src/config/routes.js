import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Game from '../app/screens/Game';
import Login from '../app/screens/Login';

export const routes = {
  GAME: '/game',
  LOGIN: '/'
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.LOGIN} component={Login} />
        <Route path={routes.GAME} component={Game} />
      </Switch>
    </BrowserRouter>
  );
}
export default AppRoutes;
