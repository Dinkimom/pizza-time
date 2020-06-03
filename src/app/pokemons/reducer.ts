import { IActionPayloaded } from '../../store/IAction'
import { IReducerPayloaded } from '../../store/IReducer'
import { IPokemonsState } from './state'

const initialState: IPokemonsState = {}

export class PokemonsReducer implements IReducerPayloaded<IPokemonsState> {
  constructor() {
    this.reduce = this.reduce.bind(this)
  }

  public static Create() {
    const reducer = new PokemonsReducer()
    return reducer.reduce
  }

  public reduce(
    state: IPokemonsState = initialState,
    action: IActionPayloaded<any>,
  ): IPokemonsState {
    let newState = { ...state }

    switch (action.type) {
    }

    return newState
  }
}
