import { IActionPayloaded } from './IAction';

export interface IReducerPayloaded<T> {
  reduce(state: T, action: IActionPayloaded<any>): T;
}
