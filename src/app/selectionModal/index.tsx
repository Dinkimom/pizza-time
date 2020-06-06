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
import { maxOrdersCount } from '../../shared/constants/maxOrdersCount';
import { useCurrency } from '../../shared/hooks/useCurrency';
import { useImages } from '../../shared/hooks/useImages';

export const SelectionModal = () => {
  const [option, setOption] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { currentPizza } = useSelector((state: IRootState) => state.menu);

  const { quantity: currentCount } = useSelector(
    (state: IRootState) => state.cart,
  );

  const pizzaImage = useImages(currentPizza?.id as string);

  const currency = useCurrency();

  const isOpened = currentPizza !== null;

  const isLimitReached = currentCount === maxOrdersCount;

  const isMinimumCountReached = quantity === 1;

  const isMaximumCountReached =
    quantity === maxOrdersCount || quantity + currentCount >= maxOrdersCount;

  const handleClose = () => {
    dispatch(menuActions.closePizza());
    setOption(0);
    setQuantity(1);
  };

  const handleOptionSelect = (option: OptionsEnum) => {
    setOption(option);
  };

  const handleIncrement = () => {
    if (!isMaximumCountReached) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (!isMinimumCountReached) {
      setQuantity(quantity - 1);
    }
  };

  const handleChoose = () => {
    dispatch(
      cartActions.addOrder({
        pizza: currentPizza as PizzaDTO,
        option,
        quantity,
      }),
    );
    dispatch(menuActions.closePizza());
    setOption(0);
    setQuantity(1);
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
        <img src={pizzaImage} alt='pizza' />
      </div>
      <p className='selection-modal__name'>{currentPizza?.name}</p>
      <p className='selection-modal__info'>
        {currentPizza?.options[option].size}cm,{' '}
        {currentPizza?.options[option].weight}g
      </p>

      {renderContorls()}

      <div className='selection-modal__footer'>
        <div className='selection-modal__footer__quantity'>
          <button
            className='primary-button'
            onClick={handleDecrement}
            disabled={isMinimumCountReached}
          >
            &#8722;
          </button>
          <span className='selection-modal__footer__quantity__value'>
            {quantity}
          </span>
          <button
            className='primary-button'
            onClick={handleIncrement}
            disabled={isMaximumCountReached}
          >
            &#43;
          </button>
        </div>
        <button
          className='selection-modal__controls__confirm primary-button'
          onClick={handleChoose}
          disabled={isLimitReached}
        >
          {isLimitReached ? (
            'Maximum limit reached'
          ) : (
            <>
              {' '}
              Add to cart for{' '}
              {(currentPizza?.options[option].price[currency.current] || 0) *
                quantity}
              {currency.symbol}
            </>
          )}
        </button>
      </div>
    </Modal>
  );
};
