import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as pathes from '../shared/constants/pathes';
import { Menu } from './menu';
import { PageWrapper } from './pageWrapper';

export const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Switch>
          <Route exact={true} path={pathes.ROOT} component={Menu} />
        </Switch>
      </PageWrapper>
    </Router>
  );
};
