import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Button } from '../../shared/components/button';
import { Input } from '../../shared/components/input';
import { Modal } from '../../shared/components/modal';
import { phoneRegex } from '../../shared/constants/phoneRegex';
import { IRootState } from '../../store/state';
import { profileActions } from '../profile/actions';
import './index.css';

const LoginSchema = Yup.object().shape({
  phone: Yup.string().matches(phoneRegex).required('Required'),
});

export const LoginModal = () => {
  const dispatch = useDispatch();

  const { isOpened, isFetching } = useSelector(
    (state: IRootState) => state.profile,
  );

  const handleClose = () => {
    dispatch(profileActions.closeModal());
  };

  return (
    <Modal className='login-modal' onClose={handleClose} isOpened={isOpened}>
      <Formik
        initialValues={{
          phone: '',
        }}
        enableReinitialize={true}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          dispatch(profileActions.login(values));
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Input
              required={true}
              name='phone'
              disabled={isFetching}
              placeholder='Phone number'
            />

            <Button active={true} type='submit' loading={isFetching}>
              Submit
            </Button>
          </form>
        )}
      />
    </Modal>
  );
};
