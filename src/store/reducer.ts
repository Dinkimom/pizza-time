import { combineReducers } from 'redux'
import { PokemonsReducer } from '../app/pokemons/reducer'
import { IRootState } from './state'

export const rootReducer = combineReducers<IRootState>({
  pokemons: PokemonsReducer.Create(),
})
