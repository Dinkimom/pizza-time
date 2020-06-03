import { combineReducers } from 'redux'
import { MenuReducer } from '../app/menu/reducer'
import { IRootState } from './state'

export const rootReducer = combineReducers<IRootState>({
  menu: MenuReducer.Create(),
})
