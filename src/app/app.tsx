import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as pathes from '../shared/constants/pathes';
import { Cart } from './cart';
import { Menu } from './menu';
import { PageWrapper } from './pageWrapper';

export const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Switch>
          <Route exact={true} path={pathes.ROOT} component={Menu} />
          <Route exact={true} path={pathes.CART} component={Cart} />
        </Switch>
      </PageWrapper>
    </Router>
  );
};
