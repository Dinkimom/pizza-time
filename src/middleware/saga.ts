import { all } from 'redux-saga/effects'
import { PokemonsApiSaga } from '../app/pokemons/saga'

export const rootSaga = function* root() {
  yield all([PokemonsApiSaga.Initialize()])
}

export function* safeSagaExecute(action: any, func: (a: any) => any) {
  try {
    yield func(action)
  } catch (error) {
    console.error(error)
  }
}
