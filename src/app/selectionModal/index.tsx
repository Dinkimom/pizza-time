import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../shared/components/modal';
import { sizes } from '../../shared/constants/sizes';
import { SizesEnum } from '../../shared/types/SizesEnum';
import { IRootState } from '../../store/state';
import { menuActions } from '../menu/actions';
import './index.css';

export const SelectionModal = () => {
  const [option, setOption] = useState(0);

  const dispatch = useDispatch();

  const { currentPizza } = useSelector((state: IRootState) => state.menu);

  const isOpened = currentPizza !== null;

  const handleClose = () => {
    dispatch(menuActions.closePizza());
  };

  const handleOptionSelect = (option: SizesEnum) => {
    setOption(option);
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

      <button className='selection-modal__confirm primary-button'>
        Add to cart for {currentPizza?.options[option].price.eur}&#8364;
      </button>
    </Modal>
  );
};
