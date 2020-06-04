import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../shared/components/card';
import { Container } from '../../shared/components/container';
import { IRootState } from '../../store/state';
import { SelectionModal } from '../selectionModal';
import { menuActions } from './actions';
import './index.css';

export const Menu = () => {
  const dispatch = useDispatch();

  const { list, isFetching, error } = useSelector(
    (state: IRootState) => state.menu,
  );

  useEffect(() => {
    if (list.length === 0) {
      dispatch(menuActions.loadData());
    }
  }, [dispatch, list.length]);

  const renderList = () =>
    list.map((item) => (
      <Card
        record={item}
        key={item.id}
        handleClick={() => handlePizzaOpen(item.id)}
      />
    ));

  const handlePizzaOpen = (id: string) => {
    dispatch(menuActions.openPizza(id));
  };

  return (
    <>
      <Container isFetching={isFetching} error={error} className='menu'>
        {renderList()}
      </Container>
      <SelectionModal />
    </>
  );
};
