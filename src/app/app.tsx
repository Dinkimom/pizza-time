import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dimmer } from '../shared/components/dimmer';
import { PrivateRoute } from '../shared/components/privateRoute';
import * as pathes from '../shared/constants/pathes';
import { Cart } from './cart';
import { Menu } from './menu';
import { PageNotFound } from './pageNotFound';
import { PageWrapper } from './pageWrapper';
import { Profile } from './profile';

export const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Switch>
          <Route exact={true} path={pathes.ROOT}>
            <Menu />
          </Route>
          <Route exact={true} path={pathes.CART}>
            <Cart />
          </Route>
          <PrivateRoute exact={true} path={pathes.PROFILE}>
            <Profile />
          </PrivateRoute>
          <Route component={PageNotFound} />
        </Switch>
      </PageWrapper>
      <Dimmer />
    </Router>
  );
};
