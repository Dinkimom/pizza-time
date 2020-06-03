import { all } from 'redux-saga/effects'
import { MenuApiSaga } from '../app/menu/saga'

export const rootSaga = function* root() {
  yield all([MenuApiSaga.Initialize()])
}

export function* safeSagaExecute(action: any, func: (a: any) => any) {
  try {
    yield func(action)
  } catch (error) {
    console.error(error)
  }
}
