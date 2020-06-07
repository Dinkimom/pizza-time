import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Button } from '../../shared/components/button';
import { Input } from '../../shared/components/input';
import { Modal } from '../../shared/components/modal';
import { phoneRegex } from '../../shared/constants/phoneRegex';
import { ResponseTypesEnum } from '../../shared/types/ResponseTypesEnum';
import { IRootState } from '../../store/state';
import { cartActions } from '../cart/actions';
import './index.css';

const ConfirmSchema = Yup.object().shape({
  street: Yup.string().required('Required'),
  house: Yup.string().required('Required'),
  phone: Yup.string().matches(phoneRegex).required('Required'),
  name: Yup.string().required('Required'),
});

export const ConfirmModal = () => {
  const dispatch = useDispatch();

  const { isOpened, isModalFetching, response, orders } = useSelector(
    (state: IRootState) => state.cart,
  );

  const { user } = useSelector((state: IRootState) => state.profile);

  const handleClose = () => {
    dispatch(cartActions.closeModal());
  };

  return (
    <Modal isOpened={isOpened} onClose={handleClose} className='confirm-modal'>
      <Formik
        initialValues={{
          street: '',
          house: '',
          porch: '',
          flat: '',
          floor: '',
          phone: user?.phone || '',
          name: user?.name || '',
        }}
        enableReinitialize={true}
        validationSchema={ConfirmSchema}
        onSubmit={(values) => {
          dispatch(cartActions.confirm({ ...values, order: orders }));
        }}
        render={({ handleSubmit }) => {
          if (response === ResponseTypesEnum.NotSubmitted) {
            return (
              <form onSubmit={handleSubmit}>
                <h2>Where to deliver?</h2>

                <Input
                  type='text'
                  placeholder='Street'
                  name='street'
                  disabled={isModalFetching}
                />

                <div className='confirm-modal__row'>
                  <Input
                    type='text'
                    placeholder='House'
                    name='house'
                    disabled={isModalFetching}
                  />
                  <Input
                    type='text'
                    placeholder='Porch'
                    name='porch'
                    disabled={isModalFetching}
                  />
                  <Input
                    type='text'
                    placeholder='Flat'
                    name='flat'
                    disabled={isModalFetching}
                  />
                  <Input
                    type='text'
                    placeholder='Floor'
                    name='floor'
                    disabled={isModalFetching}
                  />
                </div>
                <h2>Contact information</h2>
                <Input
                  type='text'
                  placeholder='Phone number'
                  name='phone'
                  disabled={isModalFetching}
                />
                <Input
                  type='text'
                  placeholder='Name'
                  name='name'
                  disabled={isModalFetching}
                />
                <Button active={true} loading={isModalFetching} type='submit'>
                  Confirm
                </Button>
              </form>
            );
          }

          if (response === ResponseTypesEnum.Success) {
            return (
              <div className='confirm-modal__success'>
                <p>Your ourder has been confirmed</p>
                <p>Our operator will contact you shortly!</p>
              </div>
            );
          }

          if (response === ResponseTypesEnum.Error) {
            return (
              <div className='confirm-modal__error'>
                <p>Something went wrong!</p>
              </div>
            );
          }
        }}
      />
    </Modal>
  );
};
