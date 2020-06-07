import React from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { IRootState } from '../../../store/state';
import { ROOT } from '../../constants/pathes';

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { user } = useSelector((state: IRootState) => state.profile);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user !== null) {
          return children;
        }

        return (
          <Redirect
            to={{
              pathname: ROOT,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
