import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../shared/components/modal';
import { sizes } from '../../shared/constants/sizes';
import { IRootState } from '../../store/state';
import { menuActions } from '../menu/actions';
import './index.css';
import { OptionsEnum } from '../../shared/types/OptionsEnum';
import { cartActions } from '../cart/actions';
import { PizzaDTO } from '../../shared/dto/PizzaDTO';

export const SelectionModal = () => {
  const [option, setOption] = useState(0);

  const dispatch = useDispatch();

  const { currentPizza } = useSelector((state: IRootState) => state.menu);

  const isOpened = currentPizza !== null;

  const handleClose = () => {
    dispatch(menuActions.closePizza());
    setOption(0);
  };

  const handleOptionSelect = (option: OptionsEnum) => {
    setOption(option);
  };

  const handleChoose = () => {
    dispatch(
      cartActions.addOrder({
        pizza: currentPizza as PizzaDTO,
        option,
        quantity: 1,
      }),
    );
    dispatch(menuActions.closePizza());
    setOption(0);
  };

  const renderContorls = () => (
    <div className='selection-modal__controls'>
      {sizes.map((item, index) => (
        <button
          onClick={() => handleOptionSelect(index)}
          className={` ${
            option === index ? 'primary-button--active' : 'secondary-button'
          }`}
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );

  return (
    <Modal
      isOpened={isOpened}
      onClose={handleClose}
      className='selection-modal'
    >
      <div className='selection-modal__image'>
        <img src='./images/pizza.png' alt='pizza' />
      </div>
      <p className='selection-modal__name'>{currentPizza?.name}</p>
      <p className='selection-modal__info'>
        {currentPizza?.options[option].size}sm,{' '}
        {currentPizza?.options[option].weight}g
      </p>

      {renderContorls()}

      <button
        className='selection-modal__confirm primary-button'
        onClick={handleChoose}
      >
        Add to cart for {currentPizza?.options[option].price.eur}&#8364;
      </button>
    </Modal>
  );
};
