import React from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../store/state';
import { PROFILE } from '../../constants/pathes';
import { NavLink } from 'react-router-dom';
import { profileActions } from '../../../app/profile/actions';
import { Button } from '../button';

export const LoginButton = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: IRootState) => state.profile);

  const handleOpen = () => {
    dispatch(profileActions.openModal());
  };

  if (user !== null) {
    return (
      <NavLink to={PROFILE}>
        <Button className='login-button'>{user.name}</Button>
      </NavLink>
    );
  } else {
    return (
      <Button className='login-button' onClick={handleOpen}>
        Login
      </Button>
    );
  }
};
