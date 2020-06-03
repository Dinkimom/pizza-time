export class PokemonsApiSaga {
  public constructor() {}

  public static Initialize() {
    const saga = new PokemonsApiSaga()
    return saga.watch()
  }

  public *watch() {}
}
