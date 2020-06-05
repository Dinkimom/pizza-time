import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../shared/components/modal';
import { IRootState } from '../../store/state';
import { profileActions } from '../profile/actions';
import './index.css';

export const LoginModal = () => {
  const dispatch = useDispatch();

  const { isOpened } = useSelector((state: IRootState) => state.profile);

  const handleClose = () => {
    dispatch(profileActions.closeModal());
  };

  return (
    <Modal className='login-modal' onClose={handleClose} isOpened={isOpened}>
      <p>Here will be login modal</p>
    </Modal>
  );
};
