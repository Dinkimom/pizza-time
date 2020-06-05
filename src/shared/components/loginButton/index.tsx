import React from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../store/state';
import { PROFILE } from '../../constants/pathes';
import { NavLink } from 'react-router-dom';
import { profileActions } from '../../../app/profile/actions';

export const LoginButton = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: IRootState) => state.profile);

  const handleOpen = () => {
    dispatch(profileActions.openModal());
  };

  if (user !== null) {
    return (
      <NavLink to={PROFILE}>
        <button className='secondary-button login-button'>{user.name}</button>
      </NavLink>
    );
  } else {
    return (
      <button className='secondary-button login-button' onClick={handleOpen}>
        Login
      </button>
    );
  }
};
