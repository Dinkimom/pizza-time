import { Action } from 'redux'

export interface IAction extends Action {}

export interface IActionPayloaded<T> extends IAction {
  type: string
  payload: T
}

export interface IActionCreator {
  [key: string]: (payload?: any) => IActionPayloaded<any>
}
