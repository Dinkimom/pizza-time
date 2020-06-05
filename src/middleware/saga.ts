import { ProfileApiSaga } from './../app/profile/saga';
import { all } from 'redux-saga/effects';
import { MenuApiSaga } from '../app/menu/saga';
import { CartApiSaga } from './../app/cart/saga';

export const rootSaga = function* root() {
  yield all([
    MenuApiSaga.Initialize(),
    CartApiSaga.Initialize(),
    ProfileApiSaga.Initialize(),
  ]);
};

export function* safeSagaExecute(action: any, func: (a: any) => any) {
  try {
    yield func(action);
  } catch (error) {
    console.error(error);
  }
}
