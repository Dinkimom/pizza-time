import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../shared/components/container';
import { IRootState } from '../../store/state';
import './index.css';
import { Order } from '../../shared/components/order';
import { useCurrency } from '../../shared/hooks/useCurrency';
import { profileActions } from './actions';
import { Button } from '../../shared/components/button';

export const Profile = () => {
  const dispatch = useDispatch();
  const currency = useCurrency();

  const { history, isFetching, error, user } = useSelector(
    (state: IRootState) => state.profile,
  );

  useEffect(() => {
    dispatch(profileActions.loadHistory(user?.id as string));
  }, [dispatch, user]);

  const handleLogout = () => {
    dispatch(profileActions.logout());
  };

  const renderHistory = () => {
    if (history.length === 0) {
      return <p>There are no orders yet</p>;
    }

    return history.map((historyItem, index) => (
      <div className='profile__history' key={index}>
        <p className='profile__history__date'>
          {historyItem.date.toLocaleDateString()}
        </p>
        {historyItem.order.map((item, index) => (
          <Order history={true} record={item} key={index} />
        ))}
        <h3 className='profile__history__total'>
          Total: {historyItem.total[currency.current]}
          {currency.symbol}
        </h3>
      </div>
    ));
  };

  return (
    <Container isFetching={isFetching} error={error} className='profile'>
      <div className='profile__user-block'>
        <p className='profile__user-block__name'>{user?.name}</p>
        <Button className='profile__user-block__logout' onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <h2>History</h2>
      {renderHistory()}
    </Container>
  );
};
