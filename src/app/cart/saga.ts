import { PizzaDTO } from './../../shared/dto/PizzaDTO';
import { MinifiedOrderDTO } from './../../shared/dto/MinifiedOrderDTO';
import { OrderDTO } from './../../shared/dto/OrderDTO';
import { maxOrdersCount } from './../../shared/constants/maxOrdersCount';
import { OptionsEnum } from './../../shared/types/OptionsEnum';
import { put, takeEvery } from 'redux-saga/effects';
import { safeSagaExecute } from '../../middleware/saga';
import { orderClient, menuClient } from './../../index';
import { ConfirmOderDTO } from './../../shared/dto/ConfirmOrderDTO';
import { IActionPayloaded } from './../../store/IAction';
import { cartActions } from './actions';
import * as types from './types';

export class CartApiSaga {
  public constructor() {
    this.confirm = this.confirm.bind(this);
  }

  public static Initialize() {
    const saga = new CartApiSaga();
    return saga.watch();
  }

  public *watch() {
    yield takeEvery(types.CART_CONFIRM, (a) =>
      safeSagaExecute(a, this.confirm),
    );
    yield takeEvery(types.CART_REMEMBER_ORDERS, (a) =>
      safeSagaExecute(a, this.rememberOrders),
    );
  }

  public *confirm(action: IActionPayloaded<ConfirmOderDTO>) {
    yield put(cartActions.setFetching(true));

    try {
      const response = yield orderClient.confirmOrder(action.payload);

      if (response.success) {
        yield put(cartActions.confirmSuccess());
      } else {
        yield put(cartActions.confirmError());
      }
    } catch (error) {
      yield put(cartActions.setError(error.message));
    }

    yield put(cartActions.setFetching(false));
  }

  public *rememberOrders() {
    yield put(cartActions.setFetching(true));

    try {
      const minifiedOrders = JSON.parse(
        localStorage.getItem('orders') as string,
      );

      let isValid = true;

      if (!Array.isArray(minifiedOrders)) {
        isValid = false;
      } else {
        for (let i = 0; i < minifiedOrders.length; i++) {
          let item = minifiedOrders[i];

          if (
            typeof item.id !== 'string' ||
            typeof item.quantity !== 'number' ||
            item.quantity <= 0 ||
            typeof item.option !== 'number' ||
            item.option < OptionsEnum.Small ||
            item.option > OptionsEnum.Large
          ) {
            isValid = false;
            break;
          }
        }
      }

      let totalQuantity = 0;
      minifiedOrders.forEach(
        (item: MinifiedOrderDTO) =>
          (totalQuantity = totalQuantity + item.quantity),
      );

      if (totalQuantity > maxOrdersCount) {
        isValid = false;
      }

      if (isValid) {
        const respone = yield menuClient.getMenu();

        let orders: OrderDTO[] = [];

        for (let i = 0; i < minifiedOrders.length; i++) {
          const minifiedOrder = minifiedOrders[i];
          const pizza = respone.data.filter(
            (item: PizzaDTO) => minifiedOrder.id === item.id,
          )[0];

          if (pizza === undefined) {
            isValid = false;
            break;
          }

          orders[i] = {
            pizza,
            option: minifiedOrder.option,
            quantity: minifiedOrder.quantity,
          };
        }

        if (isValid) {
          yield put(cartActions.ordersRemembered(orders));
        } else {
          localStorage.setItem('orders', '');
        }
      } else {
        localStorage.setItem('orders', '');
      }
    } catch (error) {
      yield put(cartActions.setError(error.message));
    }

    yield put(cartActions.setFetching(false));
  }
}
