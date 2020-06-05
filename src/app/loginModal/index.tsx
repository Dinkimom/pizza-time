import React, {
  ChangeEvent,
  createRef,
  FormEvent,
  MutableRefObject,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../shared/components/modal';
import { phoneRegex } from '../../shared/constants/phoneRegex';
import { IRootState } from '../../store/state';
import { profileActions } from '../profile/actions';
import './index.css';

export const LoginModal = () => {
  const dispatch = useDispatch();

  const { isOpened, isFetching } = useSelector(
    (state: IRootState) => state.profile,
  );

  const phoneRef = createRef() as MutableRefObject<HTMLInputElement>;

  const [phone, setPhone] = useState('');

  const handleClose = () => {
    dispatch(profileActions.closeModal());
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    phoneRef.current.classList.remove('error');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!phoneRegex.test(phone)) {
      phoneRef.current.classList.add('error');
    } else {
      dispatch(profileActions.login({ phone }));
    }
  };

  return (
    <Modal className='login-modal' onClose={handleClose} isOpened={isOpened}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label className='form__field'>
          Phone number
          <input
            required={true}
            value={phone}
            onChange={handlePhoneChange}
            ref={phoneRef}
            disabled={isFetching}
          />
        </label>

        <button className='primary-button' type='submit' disabled={isFetching}>
          Submit
        </button>
      </form>
    </Modal>
  );
};
