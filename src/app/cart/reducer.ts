import { ICurrency } from '../../shared/types/ICurrency';
import { IActionPayloaded } from '../../store/IAction';
import { IReducerPayloaded } from '../../store/IReducer';
import { maxOrdersCount } from './../../shared/constants/maxOrdersCount';
import { OrderDTO } from './../../shared/dto/OrderDTO';
import { OptionsEnum } from './../../shared/types/OptionsEnum';
import { ICartState } from './state';
import * as types from './types';
import { ResponseTypesEnum } from '../../shared/types/ResponseTypesEnum';

const initialState: ICartState = {
  orders: [],
  isFetching: false,
  error: '',
  response: ResponseTypesEnum.NotSubmitted,
  total: {
    usd: 0,
    eur: 0,
  },
  quantity: 0,
  deliveryCost: {
    eur: 8,
    usd: 7,
  },
};

export class CartReducer implements IReducerPayloaded<ICartState> {
  constructor() {
    this.reduce = this.reduce.bind(this);
  }

  public static Create() {
    const reducer = new CartReducer();
    return reducer.reduce;
  }

  public reduce(
    state: ICartState = initialState,
    action: IActionPayloaded<any>,
  ): ICartState {
    let newState = { ...state };
    let order;

    switch (action.type) {
      case types.CART_ADD_ORDER:
        if (newState.quantity !== maxOrdersCount) {
          order = this.filterOrders(
            newState.orders,
            action.payload.pizza.id,
            action.payload.option,
          );

          if (order === null) {
            newState.orders = newState.orders.concat([action.payload]);
          } else {
            order.quantity = order.quantity + action.payload.quantity;
          }
          this.saveOrders(newState.orders);
          newState.total = this.calculateTotal(
            newState.orders,
            newState.deliveryCost,
          );
          newState.quantity = this.countOrders(newState.orders);
        }
        break;

      case types.CART_INCREMENT_ORDER:
        if (newState.quantity !== maxOrdersCount) {
          order = this.filterOrders(
            newState.orders,
            action.payload.id,
            action.payload.option,
          ) as OrderDTO;

          order.quantity = order.quantity + 1;
          this.saveOrders(newState.orders);
          newState.total = this.calculateTotal(
            newState.orders,
            newState.deliveryCost,
          );
          newState.quantity = this.countOrders(newState.orders);
        }
        break;

      case types.CART_DECREMENT_ORDER:
        order = this.filterOrders(
          newState.orders,
          action.payload.id,
          action.payload.option,
        ) as OrderDTO;

        order.quantity = order.quantity - 1;
        if (order.quantity === 0) {
          newState.orders = this.removeOrder(
            newState.orders,
            order.pizza.id,
            order.option,
          );
        }
        this.saveOrders(newState.orders);
        newState.total = this.calculateTotal(
          newState.orders,
          newState.deliveryCost,
        );
        newState.quantity = this.countOrders(newState.orders);
        break;

      case types.CART_REMOVE_ORDER:
        newState.orders = this.removeOrder(
          newState.orders,
          action.payload.id,
          action.payload.option,
        );
        this.saveOrders(newState.orders);
        newState.total = this.calculateTotal(
          newState.orders,
          newState.deliveryCost,
        );
        newState.quantity = this.countOrders(newState.orders);
        break;

      case types.CART_REMEMBER_ORDERS:
        newState.orders =
          JSON.parse(localStorage.getItem('orders') as string) || [];
        newState.total = this.calculateTotal(
          newState.orders,
          newState.deliveryCost,
        );
        newState.quantity = this.countOrders(newState.orders);
        break;

      case types.CART_SET_FETCHING:
        newState.isFetching = action.payload;
        break;

      case types.CART_SET_ERROR:
        newState.isFetching = action.payload;
        break;

      case types.CART_CONFIRM_SUCCESS:
        newState.response = ResponseTypesEnum.Success;
        newState.orders = [];
        break;

      case types.CART_CONFIRM_ERROR:
        newState.response = ResponseTypesEnum.Error;
        break;
    }

    return newState;
  }

  public filterOrders = (
    orders: OrderDTO[],
    id: string,
    option: OptionsEnum,
  ): OrderDTO | null => {
    return (
      orders.filter(
        (item) => item.pizza.id === id && item.option === option,
      )[0] || null
    );
  };

  public removeOrder = (
    orders: OrderDTO[],
    id: string,
    option: OptionsEnum,
  ): OrderDTO[] => {
    return orders.filter(
      (item) => item.pizza.id !== id || item.option !== option,
    );
  };

  public saveOrders = (orders: OrderDTO[]) => {
    localStorage.setItem('orders', JSON.stringify(orders));
  };

  public calculateTotal = (orders: OrderDTO[], deliveryCost: ICurrency) => {
    let usd = 0;
    let eur = 0;

    orders.forEach((item) => {
      usd = usd + item.pizza.options[item.option].price.usd * item.quantity;
      eur = eur + item.pizza.options[item.option].price.eur * item.quantity;
    });

    usd = usd + deliveryCost.usd;
    eur = eur + deliveryCost.eur;

    return {
      usd,
      eur,
    };
  };

  public countOrders = (orders: OrderDTO[]) => {
    let quantity = 0;

    orders.forEach((item) => {
      quantity = quantity + item.quantity;
    });

    return quantity;
  };
}
