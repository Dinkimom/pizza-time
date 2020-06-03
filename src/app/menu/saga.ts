export class MenuApiSaga {
  public constructor() {}

  public static Initialize() {
    const saga = new MenuApiSaga();
    return saga.watch();
  }

  public *watch() {}
}
